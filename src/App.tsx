import { useEffect, useState } from "react";
import { Outlet, useParams } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import Layout from "./components/pages/Layout";
import LoadingScreen from "./components/LoadingScreen";
import { getClinicAll } from "./api/settings";
import { getTracking } from "./api/tracking";

function App() {
  const { clinicSlug } = useParams<{ clinicSlug: string }>();

  // حالات التخزين
  const [settings, setSettings] = useState<any>(null);
  const [trackingLoaded, setTrackingLoaded] = useState(false);

  // ----------- Fetch Settings ----------------
  useEffect(() => {
    if (!clinicSlug) return;

    getClinicAll(clinicSlug)
      .then((data) => {
        setSettings(data);

        const baseURL = import.meta.env.VITE_API_URL;

        const setIcon = (selector: string, path: string | null) => {
          if (!path) return;
          const el = document.querySelector(selector) as HTMLLinkElement;
          if (el) el.href = `${baseURL}/storage/${path}`;
        };

        // تحديث جميع الأيقونات
        setIcon("link[rel='icon']", data.favicon);
        setIcon("link[sizes='16x16']", data.icon_16);
        setIcon("link[sizes='32x32']", data.icon_32);
        setIcon("link[sizes='48x48']", data.icon_48);
        setIcon("link[rel='apple-touch-icon']", data.icon_180);
        setIcon("link[sizes='192x192']", data.icon_192);
        setIcon("link[sizes='512x512']", data.icon_512);

        document.title = data.name;
      })
      .catch(console.error);
  }, [clinicSlug]);

  // ----------- Fetch Tracking Scripts ------------
  useEffect(() => {
    if (!clinicSlug) return;
    if (!settings) return; // تأكد من الإعدادات جاهزة

    getTracking(clinicSlug)
      .then((scripts) => {
        scripts
          .filter((s: any) => s.is_active)
          .sort((a: any, b: any) => a.order - b.order)
          .forEach((script: any) => injectScript(script));

        setTrackingLoaded(true);
      })
      .catch(console.error);
  }, [clinicSlug, settings]);

  // ----------- Loader ------------
  if (!settings || !trackingLoaded) return <LoadingScreen />;

  // ----------- Render ------------
  return (
    <>
      <Toaster position="top-right" reverseOrder={false} />
      <Layout>
        <Outlet />
      </Layout>
    </>
  );
}

// ----------- Inject Scripts Function ------------
const injectScript = (item: any) => {
  const container = item.position === "head" ? document.head : document.body;

  // نحول string لـ HTML
  const temp = document.createElement("div");
  temp.innerHTML = item.code;

  // نمسك كل elements جوه
  const elements = temp.querySelectorAll("script, noscript, img");

  elements.forEach((el) => {
    if (el.tagName === "SCRIPT") {
      const script = document.createElement("script");
      // copy attributes
      Array.from(el.attributes).forEach((attr) => {
        script.setAttribute(attr.name, attr.value);
      });
      script.text = el.innerHTML;
      container.appendChild(script);
    } else {
      container.appendChild(el.cloneNode(true));
    }
  });
};

export default App;