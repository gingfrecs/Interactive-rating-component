const pageOne = document.querySelector(".page1")
const pageTwo = document.querySelector(".page2")
const sub = document.querySelector(".submit-rating")
const spans = document.querySelectorAll(".rating span")
const rated = document.querySelector(".rated")

    sub.addEventListener("click", () => {
        
        const colored = Array.from(spans);
        const spec = colored.filter(spn => spn.style.color == "white")
        
        if (spec[0] == undefined) {
            alert("Please Rate Us!")
        } else {
            rated.textContent = `You selected ${spec[0].textContent} out of 5`;
            pageTwo.style.transform = "translate(0px, -384px)"
            pageTwo.style.opacity = 9;
        }s
    })

    spans.forEach(span => {
        span.addEventListener("click", () => {
            span.style.background = "hsl(25, 97%, 53%)";
            span.style.color = "white";
            const children = span.parentElement.children;
            const toArray = Array.from(children)
            const result = toArray.filter(sp => sp != span )
            result.forEach(res => {
                res.style.background ="rgb(51 65 85 / var(--tw-bg-opacity))"
                res.style.color ="rgb(163 163 163 / var(--tw-text-opacity))"
            })
        })
    })
