import { FooterParams } from "../types/footer.types";
import { NavigationType } from "../types/navigation.types";
import Alert from "./alert";
import Footer from "./footer";
import Meta from "./meta";
import Navigation from "./navigation";

type Props = {
  preview: boolean;
  children: React.ReactNode;
  footer: FooterParams;
};

export default function Layout({
  preview,
  children,
  navigation,
  footer,
}: Props & NavigationType) {
  return (
    <>
      <Meta />
      <div className="min-h-screen">
        <Navigation navigation={navigation} />
        <main>{children}</main>
      </div>
      <Footer footer={footer} />
    </>
  );
}
