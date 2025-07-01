// Script final - múltiplas plataformas de vídeo
document.addEventListener('DOMContentLoaded', function() {
    console.log('✅ VideoTube carregado com sucesso!');
    
    // Filtros
    const filterButtons = document.querySelectorAll('.filter-btn');
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            filterButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
        });
    });
    
    // Clique nos vídeos - suporte para múltiplas plataformas
    const videoCards = document.querySelectorAll('.video-card');
    videoCards.forEach(card => {
        card.addEventListener('click', function() {
            // Verifica se é YouTube (data-video-id) ou outras plataformas (data-video-url)
            const videoId = this.getAttribute('data-video-id');
            const videoUrl = this.getAttribute('data-video-url');
            
            if (videoId) {
                // Para vídeos do YouTube
                window.open(`https://www.youtube.com/watch?v=${videoId}`, '_blank');
            } else if (videoUrl) {
                // Para outras plataformas
                window.open(videoUrl, '_blank');
            }
        });
        
        // Adiciona indicação visual de que é clicável
        card.style.cursor = 'pointer';
        card.setAttribute('tabindex', '0');
        
        // Suporte para navegação por teclado
        card.addEventListener('keypress', function(e) {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                this.click();
            }
        });
    });
    
    // Fallback para thumbnails que não carregarem
    const thumbnails = document.querySelectorAll('.video-thumbnail img');
    thumbnails.forEach((img, index) => {
        img.addEventListener('error', function() {
            // Se a thumbnail falhar, usa um placeholder baseado no conteúdo
            const videoTitle = this.closest('.video-card').querySelector('.video-title').textContent;
            const tech = videoTitle.toLowerCase();
            
            let color = '6b7280'; // Cor padrão (removendo #)
            let text = '📹';
            
            if (tech.includes('css')) { color = '1572b6'; text = 'CSS'; }
            else if (tech.includes('javascript')) { color = 'f7df1e'; text = 'JS'; }
            else if (tech.includes('react')) { color = '61dafb'; text = 'REACT'; }
            else if (tech.includes('vue')) { color = '4fc08d'; text = 'VUE'; }
            else if (tech.includes('html')) { color = 'e34c26'; text = 'HTML'; }
            else if (tech.includes('typescript')) { color = '007acc'; text = 'TS'; }
            else if (tech.includes('git')) { color = 'f05032'; text = 'GIT'; }
            else if (tech.includes('sass')) { color = 'cf649a'; text = 'SASS'; }
            else if (tech.includes('bootstrap')) { color = '7c3aed'; text = 'BOOT'; }
            else if (tech.includes('devtools')) { color = '61dafb'; text = 'DEV'; }
            
            this.src = `https://via.placeholder.com/480x270/${color}/ffffff?text=${encodeURIComponent(text)}`;
        });
    });
    
    console.log(`🖼️ ${thumbnails.length} vídeos de múltiplas plataformas carregados`);
    console.log('🌐 Plataformas: Vimeo, Dailymotion, Twitch, Archive.org, e mais!');
});
