import { useParams, useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import type { IService } from "../../interfaces";
import { getServices } from "../../api/services";
import { formatDate } from "../../until";

const ServiceSinglePage = () => {
  const { id } = useParams<{ id: string }>();
  const { clinicSlug } = useParams<{ clinicSlug: string }>();
  const navigate = useNavigate();
  const baseURL = import.meta.env.VITE_API_URL;

  const { data: services, isLoading, error } = useQuery<IService[]>({
    queryKey: ["services", clinicSlug],
    queryFn: () => getServices(clinicSlug || "default"),
    enabled: !!clinicSlug,
  });

  const service = services?.find((s) => s.id.toString() === id);

  if (isLoading) return <p style={{ textAlign: "center", marginTop: "100px" }}>جاري تحميل الخدمة...</p>;
  if (error) return <p style={{ textAlign: "center", marginTop: "100px" }}>حدث خطأ أثناء تحميل الخدمة</p>;
  if (!service) return <p style={{ textAlign: "center", marginTop: "100px" }}>الخدمة غير موجودة</p>;

  return (
    <div dir="rtl" style={{ minHeight: "100vh", background: "#EFF5F9", fontFamily: "'Cairo', sans-serif" }} className="-mx-20 px-20">
      <style>{`
        .service-hero { padding-top: 110px; padding-bottom: 7px; }
        .service-container { max-width: 920px; margin: 0 auto; padding: 0 24px; }
        .service-main { max-width: 920px; margin: 0 auto; padding: 0 24px; }
        @media (max-width: 640px) {
          .service-hero { padding-top: 90px; padding-bottom: 40px; }
          .service-container { padding: 0 16px; }
          .service-main { padding: 0 10px; }
        }
      `}</style>

      {/* ── Hero ── */}
      <div className="service-hero -mx-20 px-20" style={{
        position: "relative", overflow: "hidden",
        background: "#1D2A4D",
      }}>
        <div style={{ position:"absolute", top:"-80px", left:"-80px", width:"350px", height:"350px", borderRadius:"50%", background:"#13C5CC", opacity:0.07 }} />
        <div style={{ position:"absolute", bottom:"-100px", right:"8%", width:"420px", height:"420px", borderRadius:"50%", background:"#13C5CC", opacity:0.05 }} />

        <div className="service-container" style={{ position:"relative", zIndex:1 }}>

          {/* ✅ زرار رجوع + badge في نفس السطر */}
          <div style={{ display:"flex", alignItems:"center", justifyContent:"space-between", marginBottom:"28px" }}>
            <button onClick={() => navigate(-1)} style={{
              display:"inline-flex", alignItems:"center", gap:"8px",
              background:"rgba(255,255,255,0.07)", border:"1px solid rgba(255,255,255,0.13)",
              color:"#13C5CC", padding:"8px 22px", borderRadius:"50px",
              cursor:"pointer", fontSize:"14px", transition:"all .3s",
            }}
              onMouseEnter={e => (e.currentTarget.style.background = "rgba(19,197,204,0.15)")}
              onMouseLeave={e => (e.currentTarget.style.background = "rgba(255,255,255,0.07)")}
            >
              ← رجوع
            </button>

            <span style={{
              display:"inline-block",
              background:"rgba(19,197,204,0.15)", border:"1px solid rgba(19,197,204,0.3)",
              color:"#13C5CC", padding:"5px 18px", borderRadius:"50px", fontSize:"13px", fontWeight:600,
            }}>
              خدماتنا
            </span>
          </div>

          {/* العنوان والوصف */}
          <div style={{ display:"flex", flexDirection:"column", gap:"16px" }}>
            <h1 style={{ color:"#FFFFFF", fontSize:"clamp(28px,4vw,46px)", fontWeight:800, margin:0, lineHeight:1.3 }}>
              {service.name}
            </h1>
            <p style={{ color:"#838C98", fontSize:"16px", maxWidth:"600px", lineHeight:1.8, margin:0 }}>
              {typeof service.description === "string" ? service.description.slice(0, 120) + "..." : ""}
            </p>
          </div>

        </div>
      </div>

      {/* ── Main Content ── */}
      <div className="service-main">

        {/* image pulled up */}
        <div style={{
          marginTop:"-40px", borderRadius:"16px", overflow:"hidden",
          boxShadow:"0 20px 60px rgba(29,42,77,0.18)",
          border:"3px solid #FFFFFF",
        }}>
          {service.image ? (
            <img src={`${baseURL}/storage/${service.image}`} alt={service.name}
              style={{ width:"100%", height:"380px", objectFit:"cover", display:"block" }} />
          ) : (
            <div style={{
              width:"100%", height:"380px",
              background:"linear-gradient(135deg, #13C5CC 0%, #1D2A4D 100%)",
              display:"flex", alignItems:"center", justifyContent:"center",
              color:"white", fontSize:"48px"
            }}>
              {service.name.charAt(0)}
            </div>
          )}
        </div>

        <div style={{ display:"grid", gap:"28px", marginTop:"40px", marginBottom:"0px" }}>

          {/* details card */}
          <div style={{ background:"#FFFFFF", borderRadius:"24px", padding:"40px", boxShadow:"0 4px 24px rgba(29,42,77,0.07)" }}>
            <div style={{ display:"flex", alignItems:"center", gap:"12px", marginBottom:"24px" }}>
              <div style={{ width:"4px", height:"28px", borderRadius:"4px", background:"#13C5CC" }} />
              <h2 style={{ margin:0, fontSize:"22px", fontWeight:800, color:"#1D2A4D" }}>عن الخدمة</h2>
            </div>
            <p style={{ color:"#838C98", fontSize:"16px", lineHeight:2, margin:0, whiteSpace:"pre-line" }}>
              {service.description}
            </p>
          </div>

          {/* features */}
          <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit, minmax(220px, 1fr))", gap:"20px" }}>
            {[
              { icon:"✦", label:"جودة عالية",    desc:"نضمن أعلى معايير الجودة في تقديم الخدمة" },
              { icon:"⟳", label:"سرعة التنفيذ", desc:"فريق متخصص يعمل على إنجاز طلبك بأسرع وقت" },
              { icon:"◈", label:"دعم مستمر",     desc:"نحن هنا لمساعدتك في أي وقت تحتاجنا" },
            ].map((f, i) => (
              <div key={i}
                style={{
                  background:"#FFFFFF", borderRadius:"20px", padding:"28px 24px",
                  boxShadow:"0 4px 20px rgba(29,42,77,0.06)",
                  border:"1px solid #F1F7FA", transition:"all .3s", cursor:"default",
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.transform = "translateY(-4px)";
                  e.currentTarget.style.boxShadow = "0 12px 32px rgba(19,197,204,0.15)";
                  e.currentTarget.style.borderColor = "#13C5CC";
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "0 4px 20px rgba(29,42,77,0.06)";
                  e.currentTarget.style.borderColor = "#F1F7FA";
                }}
              >
                <div style={{
                  width:"48px", height:"48px", borderRadius:"14px",
                  background:"rgba(19,197,204,0.1)",
                  display:"flex", alignItems:"center", justifyContent:"center",
                  fontSize:"22px", color:"#13C5CC", marginBottom:"16px",
                }}>
                  {f.icon}
                </div>
                <h3 style={{ margin:"0 0 8px", fontSize:"16px", fontWeight:700, color:"#1D2A4D" }}>{f.label}</h3>
                <p style={{ margin:0, fontSize:"14px", color:"#838C98", lineHeight:1.7 }}>{f.desc}</p>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div style={{
            background:"linear-gradient(135deg, #1D2A4D 0%, #13274a 100%)",
            borderRadius:"24px", padding:"48px 40px",margin: "20px 0px",
            display:"flex", flexDirection:"column", alignItems:"center",
            gap:"20px", textAlign:"center",
            position:"relative", overflow:"hidden",
          }}>
            <div style={{ position:"absolute", top:"-40px", right:"-40px", width:"200px", height:"200px", borderRadius:"50%", background:"#13C5CC", opacity:0.08 }}/>
            <div style={{ position:"absolute", bottom:"-60px", left:"-20px", width:"250px", height:"250px", borderRadius:"50%", background:"#7ddde2", opacity:0.06 }} />

            <h3 style={{ color:"#FFFFFF", fontSize:"26px", fontWeight:800, margin:0, position:"relative", zIndex:1 }}>
              هل أنت مهتم بهذه الخدمة؟
            </h3>
            <p style={{ color:"#838C98", fontSize:"15px", margin:0, maxWidth:"480px", lineHeight:1.8, position:"relative", zIndex:1 }}>
              تواصل معنا الآن وسيقوم فريقنا المتخصص بمساعدتك وتقديم أفضل الحلول
            </p>
            <button
              onClick={() => navigate(`/${clinicSlug}/booking`)}
              style={{
                background:"#13C5CC", color:"#FFFFFF", border:"none",
                padding:"14px 40px", borderRadius:"50px", fontSize:"16px", fontWeight:700,
                cursor:"pointer", transition:"all .3s", position:"relative", zIndex:1,
                boxShadow:"0 8px 24px rgba(19,197,204,0.35)",
              }}
              onMouseEnter={e => {
                e.currentTarget.style.background = "#7ddde2";
                e.currentTarget.style.transform = "translateY(-2px)";
              }}
              onMouseLeave={e => {
                e.currentTarget.style.background = "#13C5CC";
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              احجز موعدك
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ServiceSinglePage;
