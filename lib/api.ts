const POST_GRAPHQL_FIELDS = `
      title
      categories
      blurb
      date
      sys {
        id
        publishedAt
      }
      body {
        json
      }
      slug
      author {
        name
        headshot {
          url
        }
      }
      mainImage {
        url
        title
      }  
`;

const NAV_GQL_FIELDs = `
      title
        logo{
            url
         }
      navItemsCollection {
        items {
        
          slug
          title
        }
      }
  `;

const HERO_SECTION_FIELDS = `
    query heroSection {
      heroSectionCollection(limit: 1) {
        ...hero
      }
    }

    fragment hero on HeroSectionCollection {
      items {
        title
        services
        tagline
        cta
        backgroundImage {
          url
        }
      }
    }
  `;

const FOOTER_SECTION_FIELDS = `
  query footer {
    footerCollection(limit: 1) {
      items {
        title
        heading
        columnsCollection(limit: 10) {
          ...columns
        }
      }
    }
  }

  fragment columns on FooterColumnsCollection {
    items {
      text
      title
      cta
      slug
      linksCollection(limit: 10) {
        items {
          slug
          title
        }
      }
    }
  }
`;

async function fetchGraphQL(query, preview = false) {
  return fetch(
    `https://graphql.contentful.com/content/v1/spaces/${process.env.CONTENTFUL_SPACE_ID}`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${
          preview
            ? process.env.CONTENTFUL_PREVIEW_ACCESS_TOKEN
            : process.env.CONTENTFUL_ACCESS_TOKEN
        }`,
      },
      body: JSON.stringify({ query }),
    }
  ).then((response) => response.json());
}

function extractPost(fetchResponse) {
  return fetchResponse?.data?.blogPostTypeCollection?.items?.[0];
}

function extractPostEntries(fetchResponse) {
  return fetchResponse?.data?.blogPostTypeCollection?.items;
}

function extractNavigation(fetchResponse) {
  return fetchResponse?.data?.navTypeCollection?.items;
}

function extractBlogIntro(fetchResponse) {
  return fetchResponse?.data?.introCollection?.items[0];
}

function extractHeroSection(fetchResponse) {
  return fetchResponse?.data?.heroSectionCollection?.items[0];
}

function extractFooterSection(fetchResponse) {
  return fetchResponse?.data?.footerCollection?.items[0];
}

export async function getPreviewPostBySlug(slug) {
  const entry = await fetchGraphQL(
    `query {
      postCollection(where: { slug: "${slug}" }, preview: true, limit: 1) {
        items {
          ${POST_GRAPHQL_FIELDS}
        }
      }
    }`,
    true
  );
  return extractPost(entry);
}

export async function getAllPostsWithSlug() {
  const entries = await fetchGraphQL(
    `query getPosts {
      blogPostTypeCollection(where: {slug_exists: true}) {
        items {
        ${POST_GRAPHQL_FIELDS}
        }
      }
    }
  `
  );
  return extractPostEntries(entries);
}

export async function getAllPostsForHome(preview) {
  const entries = await fetchGraphQL(
    `query {
      blogPostTypeCollection(order: date_DESC, preview: ${
        preview ? "true" : "false"
      }) {
        items {
          ${POST_GRAPHQL_FIELDS}
        }
      }
    }`,
    preview
  );
  return extractPostEntries(entries);
}

export async function getPostAndMorePosts(slug, preview) {
  const entry = await fetchGraphQL(
    `query {
      blogPostTypeCollection(where: { slug: "${slug}" }, preview: ${
      preview ? "true" : "false"
    }, limit: 1) {
        items {
          ${POST_GRAPHQL_FIELDS}
        }
      }
    }`,
    preview
  );
  const entries = await fetchGraphQL(
    `query {
      blogPostTypeCollection(where: { slug_not_in: "${slug}" }, order: date_DESC, preview: ${
      preview ? "true" : "false"
    }, limit: 2) {
        items {
          ${POST_GRAPHQL_FIELDS}
        }
      }
    }`,
    preview
  );
  return {
    post: extractPost(entry),
    morePosts: extractPostEntries(entries),
  };
}

export async function getNavigation() {
  const entries = await fetchGraphQL(
    `query {
      navTypeCollection {
        items {
        ${NAV_GQL_FIELDs}
        }
      }
    }`
  );
  return extractNavigation(entries);
}

export async function getHeroSection() {
  const hero = await fetchGraphQL(`${HERO_SECTION_FIELDS}`);

  return extractHeroSection(hero);
}

export async function getFooterSection() {
  const footer = await fetchGraphQL(`${FOOTER_SECTION_FIELDS}`);

  return extractFooterSection(footer);
}

export async function getBlogIntro() {
  const intro = await fetchGraphQL(`query {
  introCollection {
    items {
      title
      summary 
    }
  }
}`);
  return extractBlogIntro(intro);
}
