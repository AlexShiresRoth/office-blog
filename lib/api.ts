const POST_GRAPHQL_FIELDS = `
      title
      categories
      blurb
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
      callButton {
          buttonText
          phoneNumber
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

const SERVICES_SECTION_FIELDS = `

    items {
    title
    preHeading
    contentItemsCollection(limit: 10) {
      items {
        image {
          title
          description
          contentType
          fileName
          size
          url
          width
          height
        }
        cta
        title
        text
        slug
        linksCollection(limit:10){
          items{
            slug
            title
          }
        }
      }
    }
  }


`;

const ABOUT_SECTION_FIELDS = `
    query aboutSection {
      richTextSectionCollection(limit: 1) {
        items {
          preHeading
          title
          cta
          image {
            url
          }
          content {
            json
          }
          slug
        }
      }
    }`;

const CONTACT_SECTION_FIELDS = `
query contactSection {
  formSectionCollection(limit: 10) {
    items {
      title
      submit
      preHeading
      inputsCollection(limit: 10) {
        items {
          label
          name
          placeholder
          type
          required
          options
        }
      }
    }
  }
}
`;

const PAGE_TYPE_FIELDS = `
      title
      slug {
        title
        slug
      }
      content {
        json
      }
 `;

const BLOG_POST_FIELDS = `
      sys{
        publishedAt
      }
      title
      body {
        json
      }
      slug
      blurb
      mainImage {
        url
      }
      categories
      author {
        name
        headshot {
          title
          url
        }
        bio
      }
`;

const IMAGE_BACKGROUND_SECTION_FIELDS = `  
      title
      subTitle
      cta
      slug {
        title
        slug
      }
      bgImage {
        url
      }`;

const COMMENT_FIELDS = `
      title
      sys{
        id
        publishedAt
      }
      body
      author
      email
      commentDate
      approved
      postReference {
        slug
        sys {
          id
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

function extractColumnsSection(fetchResponse) {
  return fetchResponse?.data?.columnSectionCollection?.items[0];
}
function extractAboutSection(fetchResponse) {
  return fetchResponse?.data?.richTextSectionCollection?.items[0];
}

function extractContactSection(fetchResponse) {
  return fetchResponse?.data?.formSectionCollection?.items[0];
}

function extractPageType(fetchResponse) {
  return fetchResponse?.data?.pageTypeCollection?.items[0];
}
function extractCategories(fetchResponse) {
  return fetchResponse?.data.blogPostTypeCollection.items;
}
function extractImageBackgroundSection(fetchResponse) {
  return fetchResponse?.data?.sectionWithImageBackgroundCollection?.items[0];
}

function extractComments(fetchResponse) {
  return fetchResponse?.data?.commentCollection?.items;
}

function extractBlogDescription(fetchResponse) {
  return fetchResponse?.data?.lawBlogDescriptionSectionCollection?.items[0];
}

function extractAuthorEntries(fetchResponse) {
  return fetchResponse?.data?.authorTypeCollection?.items;
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
      blogPostTypeCollection(where: {slug_exists: true}, order: sys_publishedAt_DESC) {
        items {
        ${BLOG_POST_FIELDS}
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
      blogPostTypeCollection(order: sys_publishedAt_DESC, preview: ${
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
      blogPostTypeCollection(where: { slug_not_in: "${slug}" }, order: sys_publishedAt_ASC, preview: ${
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
      briefSummary
    }
  }
}`);
  return extractBlogIntro(intro);
}

export async function getColumnsSectionByTitle(title) {
  const services = await fetchGraphQL(`query servicesSection {
 	columnSectionCollection(limit: 10, where: {internalName: "${title}"}) {
    ${SERVICES_SECTION_FIELDS}
  }
}`);

  return extractColumnsSection(services);
}

export async function getAboutSection() {
  const about = await fetchGraphQL(`${ABOUT_SECTION_FIELDS}`);

  return extractAboutSection(about);
}

export async function getContactSection() {
  const contact = await fetchGraphQL(`${CONTACT_SECTION_FIELDS}`);

  return extractContactSection(contact);
}

export async function getPageBySlug(slug) {
  const page = await fetchGraphQL(`query getPageTypeBySlug {
  pageTypeCollection(where:{slug: {slug:"${slug}"}}) {
    items {
      ${PAGE_TYPE_FIELDS}
    }
  }
}`);

  return extractPageType(page);
}

export async function getPostBySlug(slug) {
  const post = await fetchGraphQL(`
      query getPostBySlug {
          blogPostTypeCollection(where: {slug: "${slug}"}) {
            items {
              ${BLOG_POST_FIELDS}
            }
        }
      }
    `);

  return extractPost(post);
}

export async function getBlogCategories() {
  const categories = await fetchGraphQL(`query {
      blogPostTypeCollection(where: {categories_exists: true}) {
        items {
          categories
        }
      }
    }`);

  return extractCategories(categories);
}

export async function getPostByTitle(title) {
  const post = await fetchGraphQL(`
      query getPostByTitle {
          blogPostTypeCollection(where: {title: "${title}"}) {
            items {
              ${BLOG_POST_FIELDS}
            }
        }
      }
    `);

  return extractPost(post);
}

export async function getImageBackgroundSection(title) {
  const section = await fetchGraphQL(`
  query sectionWithImageBackground {
      sectionWithImageBackgroundCollection(where: {internalName: "${title}"}) {
        items {
          ${IMAGE_BACKGROUND_SECTION_FIELDS}
        }
      }
    }`);

  return extractImageBackgroundSection(section);
}

export async function getPostComments(slug) {
  const comments = await fetchGraphQL(`query getComments {
      commentCollection(where: {postReference: {slug: "${slug}"}}) {
        
        items {
          ${COMMENT_FIELDS}
        }
      }
    }`);

  return extractComments(comments);
}

export async function getBlogDescription() {
  const description = await fetchGraphQL(`query {
      lawBlogDescriptionSectionCollection(limit:1){
        items {
          sectionTitle
          blurb {
            json
          }
          sys {
            id
          }
        }
      }
    }`);

  return extractBlogDescription(description);
}

export async function getAllAuthorsWithSlug() {
  const entries = await fetchGraphQL(`query {
  authorTypeCollection(where:{slug_exists: true}) {
    items {
      sys {
        id
      }
      name
      email
      slug
      headshot {
        url
      }
      bio
    }
  }
}`);
  return extractAuthorEntries(entries);
}
