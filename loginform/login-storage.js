(() => {
    const EMAIL_KEY = "loginSavedEmail";
    const PASSWORD_KEY = "loginSavedPassword";

    document.addEventListener("DOMContentLoaded", () => {
        const form = document.querySelector(".login-form");
        const emailInput = document.getElementById("email");
        const passwordInput = document.getElementById("password");

        if (!form || !emailInput || !passwordInput) {
            return;
        }

        try {
            const savedEmail = localStorage.getItem(EMAIL_KEY);
            const savedPassword = localStorage.getItem(PASSWORD_KEY);
            if (savedEmail !== null) {
                emailInput.value = savedEmail;
            }
            if (savedPassword !== null) {
                passwordInput.value = savedPassword;
            }
        } catch {
            return;
        }

        form.addEventListener("submit", (e) => {
            e.preventDefault();
            try {
                localStorage.setItem(EMAIL_KEY, emailInput.value);
                localStorage.setItem(PASSWORD_KEY, passwordInput.value);
            } catch {
                /* quota or private mode */
            }
        });
    });
})();
