var CONFIG = {
  name: "Tu Empresa",
  initials: "TE",
  theme: "dark",
  kicker: "Soluciones profesionales en Nicaragua",
  headline: "Calidad que se nota, <em>servicio</em> en el que confías",
  lead: "Somos un equipo comprometido con entregar resultados reales, con atención cercana y precios claros.",
  button1: "Hablemos",
  button2: "Ver servicios",
  heroEmoji: "🏢",
  badge: ["+5 años", "de experiencia (ejemplo)"],
  aboutTitle: "Una empresa hecha para acompañarte",
  aboutText:
    "Nacimos con una idea simple: tratar a cada cliente como nos gustaría que nos traten. Hoy combinamos experiencia, buen equipo y tecnología para resolver lo que necesitas.",
  stats: [
    [120, "+", "Clientes atendidos"],
    [5, "", "Años de experiencia"],
    [98, "%", "Clientes satisfechos"],
  ],
  values: [
    ["Compromiso", "Cumplimos lo que prometemos, en tiempo y forma."],
    ["Transparencia", "Precios claros y comunicación honesta en cada paso."],
    [
      "Calidad",
      "Cuidamos cada detalle para que el resultado hable por nosotros.",
    ],
  ],
  servicesTitle: "Lo que podemos hacer por ti",
  servicesText:
    "Servicios diseñados para resolver necesidades reales de tu día a día.",
  services: [
    [
      "🛠️",
      "Servicio uno",
      "Descripción corta y clara de lo que incluye este servicio.",
    ],
    [
      "📦",
      "Servicio dos",
      "Explica en pocas palabras el beneficio principal para el cliente.",
    ],
    [
      "💡",
      "Servicio tres",
      "Un servicio pensado para que ahorres tiempo y esfuerzo.",
    ],
    [
      "🤝",
      "Asesoría",
      "Te acompañamos para elegir la mejor opción para tu caso.",
    ],
    ["🚚", "Entregas", "Llegamos a donde estés, con puntualidad y cuidado."],
    ["🔧", "Soporte", "Atención después de la venta, siempre disponibles."],
  ],
  galleryTitle: "Nuestro trabajo",
  gallery: [
    ["🏗️", "Proyecto uno", "Una muestra de nuestro trabajo reciente."],
    ["🧰", "Proyecto dos", "Detalle y calidad en cada entrega."],
    ["🏠", "Proyecto tres", "Resultados que nuestros clientes disfrutan."],
    ["🛒", "Proyecto cuatro", "Atención personalizada de principio a fin."],
    ["📈", "Proyecto cinco", "Crecimiento con estrategia y constancia."],
    ["🎯", "Proyecto seis", "Objetivos cumplidos, clientes contentos."],
  ],
  contactTitle: "Conversemos sobre tu proyecto",
  contactText: "Escríbenos y te respondemos en el mismo día.",
  info: [
    "📍 Managua, Nicaragua",
    "🕒 Lun a Vie, 8:00 a. m. a 5:00 p. m.",
    "📞 +505 5734 4053",
  ],
  whatsapp: "50557344053",
  brand: "#8b6cff",
  brand2: "#3d7bff",
  demoBar:
    "Plantilla Galaxia (web corporativa) · Demo creada por Quark Studio · Textos y cifras de ejemplo",
};
/* ===== Fin de la configuración ===== */
var $ = function (i) {
    return document.getElementById(i);
  },
  C = CONFIG,
  T = [
    ["#7c5cff", "#3d7bff"],
    ["#ff7aa8", "#ffb36b"],
    ["#2fd6b4", "#3d7bff"],
    ["#ffb36b", "#ff6f91"],
    ["#4f8bff", "#8b6cff"],
    ["#38d4e8", "#6d7cff"],
  ];
function esc(s) {
  return String(s).replace(/[&<>"']/g, function (c) {
    return {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;",
    }[c];
  });
}
var R = document.documentElement;
R.style.setProperty("--brand", C.brand);
R.style.setProperty("--brand2", C.brand2);
R.setAttribute("data-theme", C.theme || "light");
$("bar").textContent = C.demoBar;
if (!C.demoBar) $("bar").style.display = "none";
document.title = C.name;
$("logo").innerHTML = "<i>" + esc(C.initials) + "</i>" + esc(C.name);
$("kick").textContent = C.kicker;
$("h1").innerHTML = C.headline;
$("lead").textContent = C.lead;
$("b1").textContent = C.button1;
$("b2").textContent = C.button2;
$("emo").textContent = C.heroEmoji;
$("hb").textContent = C.badge[0];
$("hs").textContent = C.badge[1];
$("at").textContent = C.aboutTitle;
$("ap").textContent = C.aboutText;
$("stats").innerHTML = C.stats
  .map(function (s) {
    return (
      '<div><b data-n="' +
      s[0] +
      '" data-s="' +
      esc(s[1]) +
      '">0</b><span>' +
      esc(s[2]) +
      "</span></div>"
    );
  })
  .join("");
$("vals").innerHTML = C.values
  .map(function (v) {
    return (
      '<div class="val rv"><h3>' +
      esc(v[0]) +
      "</h3><p>" +
      esc(v[1]) +
      "</p></div>"
    );
  })
  .join("");
$("vt").textContent = C.servicesTitle;
$("vp").textContent = C.servicesText;
$("svc").innerHTML = C.services
  .map(function (s) {
    return (
      '<div class="sv rv"><i>' +
      s[0] +
      "</i><h3>" +
      esc(s[1]) +
      "</h3><p>" +
      esc(s[2]) +
      "</p></div>"
    );
  })
  .join("");
$("gt").textContent = C.galleryTitle;
$("gal").innerHTML = C.gallery
  .map(function (g, i) {
    var t = T[i % 6];
    return (
      '<button class="gi rv" data-i="' +
      i +
      '" style="--a:' +
      t[0] +
      ";--b:" +
      t[1] +
      '" aria-label="Ver ' +
      esc(g[1]) +
      '">' +
      g[0] +
      "<span>" +
      esc(g[1]) +
      "</span></button>"
    );
  })
  .join("");
$("ct").textContent = C.contactTitle;
$("cp").textContent = C.contactText;
$("info").innerHTML =
  C.info
    .map(function (x) {
      return "<div>" + esc(x) + "</div>";
    })
    .join("") +
  '<div class="map">Aquí va el mapa de Google con tu ubicación</div>';
$("foot").innerHTML =
  "<span>© 2026 " +
  esc(C.name) +
  "</span><span>Sitio hecho con Quark Studio</span>";
function wa(t) {
  return "https://wa.me/" + C.whatsapp + "?text=" + encodeURIComponent(t);
}
$("wa").href = wa("Hola " + C.name + ", quiero más información.");
$("wa").target = "_blank";
$("wa").rel = "noopener";
$("f").onsubmit = function (e) {
  e.preventDefault();
  window.open(
    wa(
      "Hola " +
        C.name +
        ", soy " +
        $("fn").value +
        ($("ft").value ? " (" + $("ft").value + ")" : "") +
        ". " +
        $("fm").value,
    ),
    "_blank",
    "noopener",
  );
};
$("burger").onclick = function () {
  document.body.classList.toggle("m");
};
$("nav").onclick = function (e) {
  if (e.target.tagName === "A") document.body.classList.remove("m");
};
$("gal").onclick = function (e) {
  var b = e.target.closest(".gi");
  if (!b) return;
  var g = C.gallery[b.dataset.i];
  $("lbe").textContent = g[0];
  $("lbt").textContent = g[1];
  $("lbp").textContent = g[2];
  $("lb").classList.add("on");
  $("lbx").focus();
};
$("lbx").onclick = function () {
  $("lb").classList.remove("on");
};
$("lb").onclick = function (e) {
  if (e.target === $("lb")) $("lb").classList.remove("on");
};
addEventListener("keydown", function (e) {
  if (e.key === "Escape") {
    $("lb").classList.remove("on");
    document.body.classList.remove("m");
  }
});
function count(el) {
  var n = +el.dataset.n,
    s = el.dataset.s,
    t0 = null;
  function st(t) {
    if (!t0) t0 = t;
    var p = Math.min(1, (t - t0) / 1200);
    el.textContent = Math.round(n * (1 - Math.pow(1 - p, 3))) + s;
    if (p < 1) requestAnimationFrame(st);
  }
  requestAnimationFrame(st);
}
var io = new IntersectionObserver(
  function (es) {
    es.forEach(function (e) {
      if (e.isIntersecting) {
        e.target.classList.add("in");
        io.unobserve(e.target);
      }
    });
  },
  { threshold: 0.15 },
);
document.querySelectorAll(".rv").forEach(function (el) {
  io.observe(el);
});
var io2 = new IntersectionObserver(
  function (es) {
    es.forEach(function (e) {
      if (e.isIntersecting) {
        count(e.target);
        io2.unobserve(e.target);
      }
    });
  },
  { threshold: 0.6 },
);
document.querySelectorAll("[data-n]").forEach(function (el) {
  io2.observe(el);
});
var links = [].slice.call(document.querySelectorAll("nav a")),
  secs = links.map(function (a) {
    return document.querySelector(a.getAttribute("href"));
  });
var io3 = new IntersectionObserver(
  function (es) {
    es.forEach(function (e) {
      if (e.isIntersecting) {
        links.forEach(function (a) {
          a.classList.toggle(
            "on",
            a.getAttribute("href") === "#" + e.target.id,
          );
        });
      }
    });
  },
  { rootMargin: "-40% 0px -55% 0px" },
);
secs.forEach(function (s) {
  io3.observe(s);
});
