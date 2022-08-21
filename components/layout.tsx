import { ContactSectionType } from "../types/contact.types";
import { FooterParams } from "../types/footer.types";
import { NavigationType } from "../types/navigation.types";
import Alert from "./alert";
import ContactFloating from "./contact-floating";
import Footer from "./footer";
import Meta from "./meta";
import Navigation from "./navigation";

type Props = {
  preview: boolean;
  children: React.ReactNode;
  footer: FooterParams;
  contact: ContactSectionType;
};

export default function Layout({
  preview,
  children,
  navigation,
  footer,
  contact,
}: Props & NavigationType) {
  return (
    <>
      <Meta />
      <div className="min-h-screen min-w-[350px]">
        <Alert preview={false} />
        <Navigation navigation={navigation} />
        <main>{children}</main>
        <ContactFloating contact={contact} />
        <Footer footer={footer} />
      </div>
    </>
  );
}
