document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Scroll To Top
    window.scrollTo(0, 0);

    // 2. Mobil Menü
    const hamburger = document.getElementById('hamburger');
    const mobileMenu = document.getElementById('mobileMenu');

    if (hamburger && mobileMenu) {
        hamburger.addEventListener('click', () => {
            if (mobileMenu.style.display === 'block') {
                mobileMenu.style.display = 'none';
            } else {
                mobileMenu.style.display = 'block';
            }
        });
    }

    // 3. Blog Filtreleme
    const filterBtns = document.querySelectorAll('.filter-btn');
    const blogPosts = document.querySelectorAll('.blog-card');

    if (filterBtns.length > 0) {
        filterBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                // Aktif butonu güncelle
                filterBtns.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');

                // Filtreleme yap
                const filter = btn.getAttribute('data-filter');

                blogPosts.forEach(post => {
                    const category = post.getAttribute('data-category');
                    if (filter === 'Tümü' || filter === category) {
                        post.style.display = 'flex';
                    } else {
                        post.style.display = 'none';
                    }
                });
            });
        });
    }
});