const episodes = [
    { id: 1115, title: "L'arrivée sur Egghead", thumb: "onepiece.jpg", url: "https://video.sibnet.ru/shell.php?videoid=5632308", isLocal: false },
    { id: 1116, title: "Le lien de l'amitié", thumb: "onepiece.jpg", url: "https://video.sibnet.ru/shell.php?videoid=5641591", isLocal: false },
    { id: 1117, title: "Le signal de Vegapunk", thumb: "onepiece.jpg", url: "https://video.sibnet.ru/shell.php?videoid=5659039", isLocal: false },
    { id: 1118, title: "Mission de sauvetage", thumb: "onepiece.jpg", url: "https://video.sibnet.ru/shell.php?videoid=5673355", isLocal: false },
    { id: 1119, title: "Le secret de l'île", thumb: "onepiece.jpg", url: "https://video.sibnet.ru/shell.php?videoid=5677088", isLocal: false },
    { id: 1120, title: "La menace s'approche", thumb: "onepiece.jpg", url: "https://video.sibnet.ru/shell.php?videoid=5687162", isLocal: false },
    { id: 1121, title: "Combat sur les docks", thumb: "onepiece.jpg", url: "https://video.sibnet.ru/shell.php?videoid=5704053", isLocal: false },
    { id: 1122, title: "Le pouvoir du futur", thumb: "onepiece.jpg", url: "https://video.sibnet.ru/shell.php?videoid=5713768", isLocal: false },
    { id: 1123, title: "Évasion d'urgence", thumb: "onepiece.jpg", url: "https://video.sibnet.ru/shell.php?videoid=5869347", isLocal: false },
    { id: 1124, title: "L'ombre du CP0", thumb: "onepiece.jpg", url: "https://video.sibnet.ru/shell.php?videoid=5870330", isLocal: false },
    { id: 1125, title: "La colère de Luffy", thumb: "onepiece.jpg", url: "https://video.sibnet.ru/shell.php?videoid=5878188", isLocal: false },
    { id: 1126, title: "La force de l'équipage", thumb: "onepiece.jpg", url: "https://video.sibnet.ru/shell.php?videoid=5886482", isLocal: false },
    { id: 1127, title: "L'énigme du siècle", thumb: "onepiece.jpg", url: "https://video.sibnet.ru/shell.php?videoid=5894369", isLocal: false },
    { id: 1128, title: "Alerte maximale", thumb: "onepiece.jpg", url: "https://video.sibnet.ru/shell.php?videoid=5903532", isLocal: false },
    { id: 1129, title: "Le destin des pirates", thumb: "onepiece.jpg", url: "https://video.sibnet.ru/shell.php?videoid=5915505", isLocal: false },
    { id: 1130, title: "Le sourire de Joy Boy", thumb: "onepiece.jpg", url:"https://video.sibnet.ru/shell.php?videoid=5921666" , isLocal:false},
    { id : 1131, title : 'Réunion stratégique', thumb : 'onepiece.jpg', url : 'https://video.sibnet.ru/shell.php?videoid=5927165', isLocal : false },
    { id: 1132, title: "Le laboratoire secret", thumb: "onepiece.jpg", url: "https://video.sibnet.ru/shell.php?videoid=5932164", isLocal: false },
    { id: 1133, title: "Défense d'Egghead", thumb: "onepiece.jpg", url: "https://video.sibnet.ru/shell.php?videoid=5937485", isLocal: false },
    { id: 1134, title: "L'amiral en mouvement", thumb: "onepiece.jpg", url: "https://video.sibnet.ru/shell.php?videoid=5949874", isLocal: false },
    { id: 1135, title: "Le choc des puissances", thumb: "onepiece.jpg", url: "//sendvid.com/embed/m7y7kprz", isLocal: false },
    { id: 1136, title: "Le courage de Nami", thumb: "onepiece.jpg", url: "https://video.sibnet.ru/shell.php?videoid=5963249", isLocal: false },
    { id: 1137, title: "L'avancée de Zoro", thumb: "onepiece.jpg", url: "https://video.sibnet.ru/shell.php?videoid=5976708", isLocal: false },
    { id: 1138, title: "Technologie interdite", thumb: "onepiece.jpg", url: "https://video.sibnet.ru/shell.php?videoid=5981938", isLocal: false },
    { id: 1139, title: "L'éveil des souvenirs", thumb: "onepiece.jpg", url: "https://video.sibnet.ru/shell.php?videoid=5988041", isLocal: false },
    { id: 1140, title: "Piège sur l'île", thumb:"onepiece.jpg" , url:"https://video.sibnet.ru/shell.php?videoid=5992452" , isLocal:false},
    { id : 1141, title : 'La force des Yonko', thumb : 'onepiece.jpg', url : 'https://video.sibnet.ru/shell.php?videoid=5999924', isLocal : false },
    { id: 1142, title: "Vers une nouvelle ère", thumb: "onepiece.jpg", url: "https://video.sibnet.ru/shell.php?videoid=6011112", isLocal: false },
    { id: 1143, title: "Le plan final", thumb: "onepiece.jpg", url: "https://video.sibnet.ru/shell.php?videoid=6013550", isLocal: false },
    { id: 1144, title: "Le sacrifice de Vegapunk", thumb: "onepiece.jpg", url: "https://video.sibnet.ru/shell.php?videoid=6018074", isLocal: false },
    { id: 1145, title: "L'attaque surprise", thumb: "onepiece.jpg", url: "https://video.sibnet.ru/shell.php?videoid=6022635", isLocal: false },
    { id: 1146, title: "Le rugissement du Gear 5", thumb: "onepiece.jpg", url:"https://video.sibnet.ru/shell.php?videoid=6038096" , isLocal:false},
    { id: 1147, title: "L'ultime frontière", thumb: "onepiece.jpg", url: "https://video.sibnet.ru/shell.php?videoid=6044593", isLocal: false },
    { id: 1148, title: "Lumière dans les ténèbres", thumb: "onepiece.jpg", url: "https://video.sibnet.ru/shell.php?videoid=6050647", isLocal: false },
    { id: 1149, title: "La volonté héritée", thumb:"onepiece.jpg" , url:"https://video.sibnet.ru/shell.php?videoid=6054421" , isLocal:false},
    { id : 1150, title : 'Nouvel Horizon', thumb : 'onepiece.jpg', url : 'https://video.sibnet.ru/shell.php?videoid=6058749', isLocal : false },
    { id : 1151, title : 'La riposte des chapeaux de paille', thumb : 'onepiece.jpg', url : 'https://video.sibnet.ru/shell.php?videoid=6068864', isLocal : false },
    { id: 1152, title: "Le futur est en marche", thumb: "onepiece.jpg", url: "https://video.sibnet.ru/shell.php?videoid=6073635", isLocal: false },
    { id: 1153, title: "Le secret de l'Acier", thumb: "onepiece.jpg", url: "https://video.sibnet.ru/shell.php?videoid=6078754", isLocal: false },
    { id: 1154, title: "Unité contre le danger", thumb: "onepiece.jpg", url: "//sendvid.com/embed/ymwpd4yc", isLocal: false },
    { id: 1155, title: "Adieu Egghead", thumb: "onepiece.jpg", url: "https://video.sibnet.ru/shell.php?videoid=6088522", isLocal: false }
];


const personnages = [
    { nom: "Sabo", role: "Chef d'État-Major de l'Armée Révolutionnaire", prime: "602 Millions B", img: "https://m.media-amazon.com/images/M/MV5BMjYzYTU5ZjMtZDhkYi00ZjRlLTk2ODktZGY2NWU3NGQ0YWFhXkEyXkFqcGc@._V1_QL75_UX500_CR0,0,500,281_.jpg" },
    { nom: "Koby", role: "Capitaine de la Marine (SWORD)", prime: "500 Millions B (Cross Guild)", img: "https://preview.redd.it/opinion-on-koby-v0-8assu7tpryyd1.jpeg?width=640&crop=smart&auto=webp&s=4bba59500f7788fb8a7535fc011df0ca86c3d9b9" },
    { nom: "Sanji Vinsmoke", role: "Cuisinier / La Jambe Noire", prime: "1.032 Milliard B", img: "https://www.mangamag.fr/wp-content/uploads/2023/08/sanji-one-piece.jpg" },
    { nom: "Roronoa Zoro", role: "Second / Chasseur de Pirates", prime: "1.111 Milliard B", img: "https://bdmaniac.fr/wp-content/uploads/2025/11/Zoro-One-piece.jpg" },
    { nom: "Perona", role: "Princesse Fantôme", prime: "Inconnue", img: "https://i.pinimg.com/564x/d7/18/74/d71874ee53b267acdd8b5f64f34ad55e.jpg" },
    { nom: "Marco", role: "Ancien Commandant (Le Phénix)", prime: "1.374 Milliard B", img: "https://preview.redd.it/how-strong-do-you-think-marco-actually-is-v0-bgv9g0g3zehb1.jpg?width=640&crop=smart&auto=webp&s=e3e9fb2fbfb37d94e6def8abdc6b949a2efaaada" },
    { nom: "Marshall D. Teach", role: "Barbe Noire / Yonko", prime: "3.996 Milliards B", img: "https://static.wikia.nocookie.net/onepiece/images/d/d6/Marshall_D._Teach_%C3%A0_37_ans.png/revision/latest?cb=20250629200220&path-prefix=fr" },
    { nom: "Edward Newgate", role: "Barbe Blanche (L'homme le plus fort)", prime: "5.046 Milliards B", img: "https://static.wikia.nocookie.net/onepiece/images/b/b7/Edward_Newgate_Anime_Infobox.png/revision/latest/scale-to-width-down/1200?cb=20220928183616&path-prefix=fr" },
    { nom: "Rocks D. Xebec", role: "Capitaine des Rocks (Légende)", prime: "Inconnue", img: "https://static.wikia.nocookie.net/onepiece/images/f/fb/Rocks_D._Xebec_Manga_Infobox.png/revision/latest?cb=20250917134113&path-prefix=fr" }
];
function switchView(viewId) {
    document.querySelectorAll('.view').forEach(view => view.classList.remove('active'));
    document.querySelectorAll('.nav-links a').forEach(link => link.classList.remove('active'));
    document.getElementById(`view-${viewId}`).classList.add('active');
    document.getElementById(`nav-${viewId}`).classList.add('active');
}

function renderContent() {
    const recentHtml = episodes.slice(0, 4).map(createEpisodeCard).join('');
    const allHtml = episodes.map(createEpisodeCard).join('');
    
    document.getElementById('recentGrid').innerHTML = recentHtml;
    document.getElementById('allEpisodesGrid').innerHTML = allHtml;
    
    document.getElementById('charactersGrid').innerHTML = personnages.map(p => `
        <div class="card" style="text-align:center;">
            <img src="${p.img}" style="height:250px;">
            <div class="card-info">
                <h4>${p.nom}</h4>
                <p>${p.role} <br> <span style="color:#f1c40f;">💰 ${p.prime}</span></p>
            </div>
        </div>
    `).join('');
}

function createEpisodeCard(ep) {
    return `
        <div class="card" onclick="openVideo(${ep.id})">
            <img src="${ep.thumb}">
            <div class="card-info">
                <h4>Épisode ${ep.id}</h4>
                <p>${ep.title}</p>
            </div>
        </div>
    `;
}

function openVideo(id) {
    const ep = episodes.find(e => e.id === id);
    const container = document.getElementById('videoPlayerContainer');
    document.getElementById('modalTitle').innerText = `Épisode ${ep.id} : ${ep.title}`;
    
    if (ep.isLocal) {
        container.innerHTML = `<video controls autoplay><source src="${ep.url}" type="video/mp4"></video>`;
    } else {
        container.innerHTML = `<iframe src="${ep.url}" allowfullscreen allow="autoplay"></iframe>`;
    }
    
    document.getElementById('videoModal').style.display = "block";
}

function closeVideo() {
    document.getElementById('videoModal').style.display = "none";
    document.getElementById('videoPlayerContainer').innerHTML = ""; // Coupe le son et la vidéo
}

renderContent();