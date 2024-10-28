/// uDevTools.js
!async function(){
    try {
        let t = {
            url_is_chii: function(t) {
                let e = new URL(t);
                return "chii.liriliri.io" === e.host && "/front_end/chii_app.html" === e.pathname;
            }
        };
        
        if (t.get_chii_frame = function() {
            return [...document.querySelectorAll("iframe[src]")].map(function(t) {
                if (function() {
                    try {
                        return this(HTMLElement.prototype.getAttribute.bind(t, "src")());
                    } catch {
                        try {
                            this(t.src);
                        } catch {
                            return !1;
                        }
                    }
                }.bind(this)()) return t;
            }.bind(this))[0];
        }.bind(t.url_is_chii),
        t.toggle_chii = function() {
            let t = this();
            document.body.style.height = "none" == (t.parentNode.style.display = "none" === window.getComputedStyle(t.parentNode, null).display ? "" : "none") ? "" : document.documentElement.clientHeight - Math.floor(Number(localStorage["chii-embedded-height"] ?? document.documentElement.clientHeight / 2) || 100) + "px";
        }.bind(t.get_chii_frame), 
        !t.url_is_chii(window.location)) {
            let e = document.createElement("script");
            HTMLElement.prototype.setAttribute.bind(e, "embedded", "true")(),
            HTMLElement.prototype.setAttribute.bind(e, "src", "https://chii.liriliri.io/target.js")(),
            e.addEventListener("load", t.toggle_chii),
            "loading" === document.readyState ? 
                document.addEventListener("DOMContentLoaded", function() {
                    document.head.appendChild(this);
                }.bind(e)) : 
                document.body.appendChild(e);

            document.addEventListener("keydown", function(t) {
                if (t.ctrlKey && t.altKey && t.key === "~") {
                    this();
                }
            }.bind(t.toggle_chii));
        }
    } catch {}
}();
