
import ReduxProvider from "./StoreProvider";
import getDictionary from "@/lib/dictionaries/dictionaries";

export default async function RootLayout({ children,params }) {
  const lang = params.lang;
  const dic = await getDictionary(lang);

  return (
<ReduxProvider lang={lang} dic={dic}>
  {children}
</ReduxProvider>
  );
}
