// ===== TOGGLE DE DARK/LIGHT MODE SIMPLIFICADO =====

const btn = document.getElementById('toggleTheme');
const isDark = () => localStorage.getItem('theme') !== 'light';

const colors = {
    dark: { bg: '#141414', text: 'white', sec: 'rgb(100, 99, 99)' },
    light: { bg: '#f5f5f5', text: '#141414', sec: '#666' }
};

const applyTheme = (dark) => {
    const c = dark ? colors.dark : colors.light;
    document.body.style.backgroundColor = c.bg;
    document.body.style.color = c.text;
    document.querySelector('h1').style.color = c.text;
    document.querySelectorAll('.profile').forEach(el => el.style.color = c.sec);

    const ajuste = document.querySelector('.ajuste');
    ajuste.style.borderColor = c.sec;
    ajuste.style.color = c.sec;
    btn.style.color = c.text;
    btn.style.borderColor = c.sec;
    btn.textContent = dark ? '🌙 Dark' : '☀️ Light';

    document.querySelectorAll('.profile').forEach(pro => {
        const img = pro.querySelector('img');
        const text = pro.querySelector('p');
        img.style.cursor = 'pointer';
        img.style.borderRadius = '8px';
        img.style.transition = 'all 0.2s ease';
        text.style.color = c.sec;

        img.onmouseover = () => {
            if (dark) {
                img.style.outline = '2px solid white';
                text.style.color = 'white';
            } else {
                img.style.outline = '3px solid #141414';
                text.style.color = '#141414';
            }
        };

        img.onmouseout = () => {
            img.style.outline = '';
            text.style.color = '';
        };
    });

    // Efeitos de hover no botão ajuste
    ajuste.onmouseover = () => {
        ajuste.style.borderColor = c.text;
        ajuste.style.color = c.text;
    };
    ajuste.onmouseout = () => {
        ajuste.style.borderColor = c.sec;
        ajuste.style.color = c.sec;
    };
};

let dark = isDark();
applyTheme(dark);

btn.addEventListener('click', () => {
    dark = !dark;
    localStorage.setItem('theme', dark ? 'dark' : 'light');
    applyTheme(dark);
});
