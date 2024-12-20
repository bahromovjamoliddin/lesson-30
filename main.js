function addNotification(type) {
    document.querySelector(".notification");
    const wrapper = document.querySelectorAll(".wrapper");

    for (const element of wrapper) {
        if (type == "success") {
            let div__success = document.createElement("div");
            div__success.classList.add("success_notification");
            div__success.classList.add("success");
            const data = dayjs().format("DD-MM-YYYY HH:mm:ss");

            div__success.textContent = `success bajarildi: ${data}`;

            const contener = document.querySelector(".notification");
            contener.appendChild(div__success);
                     setTimeout(() => {
                contener.removeChild(div__success);
            }, 3000);           
            break;
        }
        if (type == "Warning") {
            let div__warning = document.createElement("div");
            div__warning.classList.add("warning_notification");
            div__warning.classList.add("Warning");
            const data = dayjs().format("DD-MM-YYYY HH:mm:ss");
            div__warning.textContent = `warning bajarildi: ${data}`;
            const contener__warning = document.querySelector(".notification");
            contener__warning.appendChild(div__warning);
            setTimeout(() => {
                contener__warning.removeChild(div__warning);
            }, 3000);
            break;
        }
        if (type == "error") {
            let div__error = document.createElement("div");
            div__error.classList.add("erroe__notification");
            div__error.classList.add("error");

            const data = dayjs().format("DD-MM-YYYY HH:mm:ss");

            div__error.textContent = `error bajarildi: ${data}`;

            const contener__error = document.querySelector(".notification");
            contener__error.appendChild(div__error);
            setTimeout(() => {
                contener__error.removeChild(div__error);
            }, 3000);
            break;
        }
    }
}
addNotification();
