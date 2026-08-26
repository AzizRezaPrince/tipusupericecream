/* ==========================================================================
   টিপু সুলতানের সুপার স্পেশাল আইসক্রিম — JavaScript Logic & YouTube Engine
   ========================================================================== */

// ১. ইউজার নির্দিষ্ট ইউটিউব প্লেলিস্ট (User YouTube Playlist ID)
const YOUTUBE_PLAYLIST_ID = 'PL_G2Wx4LmEmWQAss9ZvR7JE4TCjuKLavL';

// ২. বাংলা সংখ্যা রূপান্তরকারী (Bengali Digit Formatter)
const bnDigits = ['০', '১', '২', '৩', '৪', '৫', '৬', '৭', '৮', '৯'];
function toBnDigits(num) {
  if (num === null || num === undefined) return '০';
  return num.toString().replace(/\d/g, d => bnDigits[d]);
}

function formatBnTime(seconds) {
  if (isNaN(seconds) || seconds < 0) return '০:০০';
  const mins = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60);
  const formattedSecs = secs < 10 ? '০' + toBnDigits(secs) : toBnDigits(secs);
  return `${toBnDigits(mins)}:${formattedSecs}`;
}

// ৩. বাংলা নস্টালজিক বাম্পার উক্তি (Bangladeshi Roadside Slogans)
const bumperQuotes = [
  "টিপু সুলতানের সুপার স্পেশাল আইসক্রিম — ১০ টাকার ললি, সুরের ভেলায় চলি!",
  "আইসক্রিম ঠান্ডা, পরান ঠান্ডা! আস্তে চলেন, সেরা বাংলা গান শোনেন।",
  "বাপের পথ ধরো, সাবধানে গাড়ি চালাও আর আইসক্রিম খাও!",
  "প্রেমের চেয়ে টিপু সুলতানের কুলফি ভালো, পরান জুড়ায়।",
  "সুর আর ঠান্ডা আইসক্রিম একসাথে — নস্টালজিয়া বাংলা গান।"
];

// ৪. ইউজারের নিজস্ব প্লেলিস্টের আসল গানসমূহ (Exact Songs from User Playlist)
const userPlaylistTracks = [
  {
    id: "7ogrlI6VD9k",
    index: 0,
    title: "তরমুজ ফাটা লাল — নার্গিস",
    artist: "Chenasur / নার্গিস",
    cover: "https://img.youtube.com/vi/7ogrlI6VD9k/hqdefault.jpg"
  },
  {
    id: "CnZLZh2zL6Y",
    index: 1,
    title: "খালী বাড়ী — নার্গিস (Khali Bari)",
    artist: "Sumon Recording / নার্গিস",
    cover: "https://img.youtube.com/vi/CnZLZh2zL6Y/hqdefault.jpg"
  },
  {
    id: "HrKw22jorMQ",
    index: 2,
    title: "ছক্কা মাইরা দিল রে — নার্গিস",
    artist: "Sumon Recording / নার্গিস",
    cover: "https://img.youtube.com/vi/HrKw22jorMQ/hqdefault.jpg"
  },
  {
    id: "4zIY0E1bYA4",
    index: 3,
    title: "তুমি আইবা আইবারে বন্ধু — সোহাগ দেওয়ান",
    artist: "Raju Ahmed / Shuhag Dewan",
    cover: "https://img.youtube.com/vi/4zIY0E1bYA4/hqdefault.jpg"
  },
  {
    id: "UhfYZPNR_Co",
    index: 4,
    title: "আমি এতো কষ্ট পাইতাম নারে — জুলেখা সরকার",
    artist: "black cat24 / Julekha Sorkar",
    cover: "https://img.youtube.com/vi/UhfYZPNR_Co/hqdefault.jpg"
  },
  {
    id: "uQz5ZWiLP4M",
    index: 5,
    title: "মন বাগানে ফুইটাছে ফুল — জুলেখা সরকার",
    artist: "Ratan Telicom / Julekha Sorkar",
    cover: "https://img.youtube.com/vi/uQz5ZWiLP4M/hqdefault.jpg"
  },
  {
    id: "_HhNjXStsmA",
    index: 6,
    title: "হৃদয়ে মারলি প্রেমের ছুড়ি রে — সন্ধ্যা রানী দাস",
    artist: "Sandha Rani Das",
    cover: "https://img.youtube.com/vi/_HhNjXStsmA/hqdefault.jpg"
  },
  {
    id: "_WIjUahd1Ag",
    index: 7,
    title: "বন্ধুরে তোর নতুন গাড়ির চাক্কা — নার্গিস",
    artist: "Bondhu Products / নার্গিস",
    cover: "https://img.youtube.com/vi/_WIjUahd1Ag/hqdefault.jpg"
  },
  {
    id: "IfDSwMCLYDQ",
    index: 8,
    title: "মন বাগনে ফুইটাছে ফুল — জুলেখা সরকার",
    artist: "BAUL ELAKA",
    cover: "https://img.youtube.com/vi/IfDSwMCLYDQ/hqdefault.jpg"
  },
  {
    id: "M4Gam95KNng",
    index: 9,
    title: "আমি সাজাবো তোমারে — স্বপ্না",
    artist: "Music Heaven / স্বপ্না",
    cover: "https://img.youtube.com/vi/M4Gam95KNng/hqdefault.jpg"
  },
  {
    id: "4USZnZC3Ij4",
    index: 10,
    title: "ভালোবেসে ব্যথা যদি দাও — নিতু বালা",
    artist: "Nitu Bala Official",
    cover: "https://img.youtube.com/vi/4USZnZC3Ij4/hqdefault.jpg"
  },
  {
    id: "E2ToAW9bgGQ",
    index: 11,
    title: "কষ্ট দিলে সয়না যত — বাউলা শারমিন",
    artist: "SHOUROV media / Sharmin",
    cover: "https://img.youtube.com/vi/E2ToAW9bgGQ/hqdefault.jpg"
  },
  {
    id: "mG3--z01ZTM",
    index: 12,
    title: "তুমি এতো বছর পর আইয়া — বাউল শারমিন",
    artist: "MH Baul Studio",
    cover: "https://img.youtube.com/vi/mG3--z01ZTM/hqdefault.jpg"
  },
  {
    id: "yS6VPWAmRAc",
    index: 13,
    title: "এক গোড়া মোটরের তিন ইঞ্চি পাইপ — নার্গিস আক্তার",
    artist: "RX Dancer Raja / Nargis",
    cover: "https://img.youtube.com/vi/yS6VPWAmRAc/hqdefault.jpg"
  },
  {
    id: "goUOgizBdQg",
    index: 14,
    title: "দাদী আমায় দিসনা বিয়া — গাওনের আসর",
    artist: "Ganer Ashor",
    cover: "https://img.youtube.com/vi/goUOgizBdQg/hqdefault.jpg"
  },
  {
    id: "uOLXNdl5_PA",
    index: 15,
    title: "মলম লাগাইয়া দিলো — নার্গিস",
    artist: "Sb Abdullah / Nargis",
    cover: "https://img.youtube.com/vi/uOLXNdl5_PA/hqdefault.jpg"
  },
  {
    id: "WlaFpeJCuy8",
    index: 16,
    title: "টাংকি ঝালাই (Tanki Faitta Jay) — নার্গিস",
    artist: "RX Dancer Raja / Nargis",
    cover: "https://img.youtube.com/vi/WlaFpeJCuy8/hqdefault.jpg"
  },
  {
    id: "2S9HAV4rEl0",
    index: 17,
    title: "আজ রাতে তোমার আমার খেলা ফাইনাল — নার্গিস আক্তার",
    artist: "Hero Sohel / Nargis",
    cover: "https://img.youtube.com/vi/2S9HAV4rEl0/hqdefault.jpg"
  },
  {
    id: "PkUQC2a454I",
    index: 18,
    title: "ঘন ঘন প্যাডেল মারে — বাংলা নিউ সং",
    artist: "Chenasur",
    cover: "https://img.youtube.com/vi/PkUQC2a454I/hqdefault.jpg"
  },
  {
    id: "cHoGpNAf6xU",
    index: 19,
    title: "আমার উঠছে পুড়া যৌবন জ্বালা — নার্গিস",
    artist: "A TO Z / Nargis",
    cover: "https://img.youtube.com/vi/cHoGpNAf6xU/hqdefault.jpg"
  }
];

// ৫. অ্যাপ্লিকেশন স্টেট (Application State)
let currentPlaylist = [...userPlaylistTracks];
let currentTrackIndex = 0;
let isPlaying = false;
let currentVolume = 100;
let isMuted = false;
let ytPlayer = null;
let updateTimer = null;

// Web Audio API Synthesizer Context
let audioCtx = null;

// DOM এলিমেন্টসমূহ
const elements = {
  bgClock: document.getElementById('bgClock'),
  listenersCount: document.getElementById('listenersCount'),
  bellBtn: document.getElementById('bellBtn'),
  notesLayer: document.getElementById('notesLayer'),
  vanWrapper: document.getElementById('vanWrapper'),
  boxLid: document.getElementById('boxLid'),
  bumperQuote: document.getElementById('bumperQuote'),
  nextQuoteBtn: document.getElementById('nextQuoteBtn'),
  
  albumArt: document.getElementById('albumArt'),
  discDeck: document.getElementById('discDeck'),
  trackTitle: document.getElementById('trackTitle'),
  trackArtist: document.getElementById('trackArtist'),
  currentTime: document.getElementById('currentTime'),
  durationTime: document.getElementById('durationTime'),
  seekProgress: document.getElementById('seekProgress'),
  seekInput: document.getElementById('seekInput'),
  
  playPauseBtn: document.getElementById('playPauseBtn'),
  prevBtn: document.getElementById('prevBtn'),
  nextBtn: document.getElementById('nextBtn'),
  volumeInput: document.getElementById('volumeInput'),
  muteToggleBtn: document.getElementById('muteToggleBtn'),
  playlistToggleBtn: document.getElementById('playlistToggleBtn'),
  
  playlistPanel: document.getElementById('playlistPanel'),
  closePlaylistBtn: document.getElementById('closePlaylistBtn'),
  playlistItemsList: document.getElementById('playlistItemsList'),
  playlistSearch: document.getElementById('playlistSearch'),
  trackCountBadge: document.getElementById('trackCountBadge'),
  
  visualizerCanvas: document.getElementById('visualizerCanvas')
};

// --------------------------------------------------------------------------
// ৬. Web Audio API — বাইসাইকেল ট্রিং-ট্রিং বেল সাউন্ড (Authentic Bicycle Bell)
// --------------------------------------------------------------------------
function initAudioContext() {
  if (!audioCtx) {
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    audioCtx = new AudioContext();
  }
  if (audioCtx.state === 'suspended') {
    audioCtx.resume();
  }
}

function playTringTringBell() {
  initAudioContext();
  if (!audioCtx) return;

  const now = audioCtx.currentTime;
  playBicycleBellStrike(now, 1420);
  playBicycleBellStrike(now + 0.08, 1450);
  playBicycleBellStrike(now + 0.28, 1420);
  playBicycleBellStrike(now + 0.36, 1450);
}

function playBicycleBellStrike(startTime, baseFreq) {
  const freqs = [baseFreq, baseFreq * 1.58, baseFreq * 2.24];
  
  freqs.forEach((freq, idx) => {
    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();

    osc.type = 'sine';
    osc.frequency.setValueAtTime(freq, startTime);

    const initialGain = idx === 0 ? 0.45 : 0.2;
    gain.gain.setValueAtTime(initialGain, startTime);
    gain.gain.exponentialRampToValueAtTime(0.001, startTime + 0.35);

    osc.connect(gain);
    gain.connect(audioCtx.destination);

    osc.start(startTime);
    osc.stop(startTime + 0.35);
  });
}

// --------------------------------------------------------------------------
// ৭. উড়ান্ত সুরের নোটিফিকেশন অ্যানিমেশন (Floating Musical Notes & Ice Creams)
// --------------------------------------------------------------------------
function spawnFloatingNotes() {
  const symbols = ['♫', '♪', '♬', '♩', '🍦', '🧊', '🍫', '🍧', '🍨', '🥭', '⭐', '✨'];
  for (let i = 0; i < 6; i++) {
    setTimeout(() => {
      const note = document.createElement('div');
      note.className = 'floating-note';
      note.textContent = symbols[Math.floor(Math.random() * symbols.length)];
      note.style.left = (25 + Math.random() * 50) + '%';
      note.style.bottom = '180px';
      elements.notesLayer.appendChild(note);

      setTimeout(() => {
        note.remove();
      }, 2500);
    }, i * 140);
  }
}

// --------------------------------------------------------------------------
// ৮. ইউটিউব প্লেয়ার ইনিশিয়ালাইজেশন (YouTube IFrame API Engine)
// --------------------------------------------------------------------------
function onYouTubeIframeAPIReady() {
  ytPlayer = new YT.Player('youtubePlayerHost', {
    height: '200',
    width: '200',
    playerVars: {
      autoplay: 0,
      controls: 0,
      disablekb: 1,
      fs: 0,
      modestbranding: 1,
      playsinline: 1,
      listType: 'playlist',
      list: YOUTUBE_PLAYLIST_ID
    },
    events: {
      onReady: onPlayerReady,
      onStateChange: onPlayerStateChange
    }
  });
}

function onPlayerReady(event) {
  if (ytPlayer && ytPlayer.unMute) {
    ytPlayer.unMute();
    ytPlayer.setVolume(currentVolume);
  }
  
  // ইউটিউব প্লেলিস্টের সমস্ত ট্র্যাক আইডি সিঙ্ক করা
  syncFullYouTubePlaylist();
  updateTrackUI(currentTrackIndex);
}

function syncFullYouTubePlaylist() {
  if (!ytPlayer || !ytPlayer.getPlaylist) return;
  const playlistIds = ytPlayer.getPlaylist();
  
  if (playlistIds && playlistIds.length > 0) {
    // যদি ইউটিউব API থেকে ৫৫টি গানের পুরো লিস্ট পাওয়া যায়, তা সিঙ্ক করা
    const newTracks = playlistIds.map((id, idx) => {
      const existing = currentPlaylist.find(t => t.id === id);
      if (existing) {
        return { ...existing, index: idx };
      }
      return {
        id: id,
        index: idx,
        title: `প্লেলিস্ট গান #${toBnDigits(idx + 1)}`,
        artist: "টিপু সুলতানের প্লেলিস্ট",
        cover: `https://img.youtube.com/vi/${id}/hqdefault.jpg`
      };
    });
    
    currentPlaylist = newTracks;
    renderPlaylistUI();
  }
}

function onPlayerStateChange(event) {
  if (event.data === YT.PlayerState.PLAYING) {
    isPlaying = true;
    updatePlayPauseUI();
    startProgressLoop();
    syncTrackMetadata();
  } else if (event.data === YT.PlayerState.PAUSED) {
    isPlaying = false;
    updatePlayPauseUI();
    stopProgressLoop();
  } else if (event.data === YT.PlayerState.ENDED) {
    nextTrack();
  }
}

function syncTrackMetadata() {
  if (ytPlayer && ytPlayer.getVideoData) {
    const data = ytPlayer.getVideoData();
    if (data && data.title) {
      elements.trackTitle.textContent = data.title;
      if (data.author) elements.trackArtist.textContent = data.author;
      
      // বর্তমান গানের নাম আপডেট করা
      if (currentPlaylist[currentTrackIndex]) {
        currentPlaylist[currentTrackIndex].title = data.title;
        if (data.author) currentPlaylist[currentTrackIndex].artist = data.author;
        renderPlaylistUI();
      }

      if (data.video_id) {
        elements.albumArt.src = `https://img.youtube.com/vi/${data.video_id}/hqdefault.jpg`;
      }
    }
  }
}

// --------------------------------------------------------------------------
// ৯. প্লে ও পজ এবং ভলিউম লজিক (Play / Pause & Volume Control)
// --------------------------------------------------------------------------
function updateTrackUI(index) {
  currentTrackIndex = (index + currentPlaylist.length) % currentPlaylist.length;
  const track = currentPlaylist[currentTrackIndex];

  elements.trackTitle.textContent = track.title;
  elements.trackArtist.textContent = track.artist;
  elements.albumArt.src = track.cover || `https://img.youtube.com/vi/${track.id}/hqdefault.jpg`;

  renderPlaylistUI();
}

function playTrackAtIndex(index) {
  initAudioContext();
  currentTrackIndex = (index + currentPlaylist.length) % currentPlaylist.length;
  const track = currentPlaylist[currentTrackIndex];

  updateTrackUI(currentTrackIndex);

  if (ytPlayer) {
    if (ytPlayer.unMute) {
      ytPlayer.unMute();
      ytPlayer.setVolume(currentVolume);
    }
    
    if (ytPlayer.playVideoAt) {
      ytPlayer.playVideoAt(currentTrackIndex);
    } else if (ytPlayer.loadVideoById) {
      ytPlayer.loadVideoById(track.id);
    }
    isPlaying = true;
    updatePlayPauseUI();
    spawnFloatingNotes();
  }

  // ভ্যান ঢাকনা অ্যানিমেশন
  elements.boxLid.style.transform = 'translateY(-15px)';
  setTimeout(() => {
    elements.boxLid.style.transform = 'none';
  }, 600);
}

function togglePlayPause() {
  initAudioContext();
  if (!ytPlayer) return;

  if (isPlaying) {
    ytPlayer.pauseVideo();
    isPlaying = false;
    updatePlayPauseUI();
  } else {
    if (ytPlayer.unMute) {
      ytPlayer.unMute();
      ytPlayer.setVolume(currentVolume);
    }
    
    if (ytPlayer.getPlayerState && ytPlayer.getPlayerState() === YT.PlayerState.PAUSED) {
      ytPlayer.playVideo();
    } else {
      playTrackAtIndex(currentTrackIndex);
    }
    isPlaying = true;
    updatePlayPauseUI();
    spawnFloatingNotes();
  }
}

function updatePlayPauseUI() {
  const playIcon = elements.playPauseBtn.querySelector('.play-icon');
  const pauseIcon = elements.playPauseBtn.querySelector('.pause-icon');

  if (isPlaying) {
    playIcon.classList.add('hidden');
    pauseIcon.classList.remove('hidden');
    elements.discDeck.classList.add('is-playing');
    elements.vanWrapper.classList.add('is-moving');
  } else {
    playIcon.classList.remove('hidden');
    pauseIcon.classList.add('hidden');
    elements.discDeck.classList.remove('is-playing');
    elements.vanWrapper.classList.remove('is-moving');
  }
}

function handleVolumeChange(e) {
  currentVolume = parseInt(e.target.value, 10);
  if (ytPlayer && ytPlayer.setVolume) {
    ytPlayer.setVolume(currentVolume);
  }
  isMuted = (currentVolume === 0);
}

function toggleMute() {
  if (!ytPlayer) return;
  if (isMuted) {
    ytPlayer.unMute();
    ytPlayer.setVolume(currentVolume || 80);
    elements.volumeInput.value = currentVolume || 80;
    isMuted = false;
  } else {
    ytPlayer.mute();
    elements.volumeInput.value = 0;
    isMuted = true;
  }
}

function nextTrack() {
  playTrackAtIndex(currentTrackIndex + 1);
}

function prevTrack() {
  playTrackAtIndex(currentTrackIndex - 1);
}

// --------------------------------------------------------------------------
// ১০. সিকবার ও প্রগ্রেস লুপ (Seek Progress & Time Updates)
// --------------------------------------------------------------------------
function startProgressLoop() {
  stopProgressLoop();
  updateTimer = setInterval(() => {
    if (ytPlayer && ytPlayer.getCurrentTime && ytPlayer.getDuration) {
      const current = ytPlayer.getCurrentTime() || 0;
      const duration = ytPlayer.getDuration() || 0;

      elements.currentTime.textContent = formatBnTime(current);
      elements.durationTime.textContent = formatBnTime(duration);

      if (duration > 0) {
        const percent = (current / duration) * 100;
        elements.seekProgress.style.width = percent + '%';
        elements.seekInput.value = percent;
      }
    }
  }, 500);
}

function stopProgressLoop() {
  if (updateTimer) clearInterval(updateTimer);
}

function handleSeek(e) {
  if (!ytPlayer || !ytPlayer.getDuration) return;
  const percent = parseFloat(e.target.value);
  const duration = ytPlayer.getDuration() || 0;
  const targetTime = (percent / 100) * duration;
  ytPlayer.seekTo(targetTime, true);
  elements.seekProgress.style.width = percent + '%';
}

// --------------------------------------------------------------------------
// ১১. প্লেলিস্ট ড্রয়ার ও সার্চ (Playlist Drawer UI)
// --------------------------------------------------------------------------
function renderPlaylistUI(searchTerm = '') {
  elements.playlistItemsList.innerHTML = '';
  let filtered = currentPlaylist;

  if (searchTerm.trim() !== '') {
    const term = searchTerm.toLowerCase();
    filtered = filtered.filter(t => 
      t.title.toLowerCase().includes(term) || 
      t.artist.toLowerCase().includes(term)
    );
  }

  elements.trackCountBadge.textContent = `${toBnDigits(filtered.length)}টি গান`;

  filtered.forEach((track, index) => {
    const origIndex = currentPlaylist.indexOf(track);
    const li = document.createElement('li');
    li.className = `playlist-item ${origIndex === currentTrackIndex ? 'active' : ''}`;
    
    li.innerHTML = `
      <img class="item-thumb" src="${track.cover}" alt="">
      <div class="item-info">
        <div class="item-title">${track.title}</div>
        <div class="item-artist">${track.artist}</div>
      </div>
    `;

    li.addEventListener('click', () => {
      playTrackAtIndex(origIndex);
    });

    elements.playlistItemsList.appendChild(li);
  });
}

// --------------------------------------------------------------------------
// ১২. ক্যানভাস অডিও ভিজ্যুয়ালাইজার (Audio Visualizer Bars)
// --------------------------------------------------------------------------
function initVisualizer() {
  const canvas = elements.visualizerCanvas;
  const ctx = canvas.getContext('2d');

  function resizeCanvas() {
    canvas.width = canvas.clientWidth;
  }
  resizeCanvas();
  window.addEventListener('resize', resizeCanvas);

  function drawVisualizer() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    const barsCount = 36;
    const barWidth = canvas.width / barsCount;

    for (let i = 0; i < barsCount; i++) {
      let height = 4;
      if (isPlaying) {
        height = Math.sin(Date.now() * 0.008 + i * 0.4) * 16 + 18;
      }
      
      const x = i * barWidth;
      const y = canvas.height - height;

      const grad = ctx.createLinearGradient(0, canvas.height, 0, 0);
      grad.addColorStop(0, '#ff3838');
      grad.addColorStop(1, '#fffa65');

      ctx.fillStyle = grad;
      ctx.fillRect(x + 2, y, barWidth - 4, height);
    }
    requestAnimationFrame(drawVisualizer);
  }

  drawVisualizer();
}

// --------------------------------------------------------------------------
// ১৩. ঘড়ি ও রিয়েলটাইম লিসেনার (Clock & Live Listeners)
// --------------------------------------------------------------------------
function updateClock() {
  const now = new Date();
  let hours = now.getHours();
  const minutes = now.getMinutes();
  const ampm = hours >= 12 ? 'PM' : 'AM';
  hours = hours % 12 || 12;

  const formattedHours = toBnDigits(hours < 10 ? '০' + hours : hours);
  const formattedMins = toBnDigits(minutes < 10 ? '০' + minutes : minutes);

  elements.bgClock.textContent = `${formattedHours}:${formattedMins} ${ampm}`;
}

function updateListenersCount() {
  const base = 155 + Math.floor(Math.random() * 25);
  elements.listenersCount.textContent = toBnDigits(base);
}

// --------------------------------------------------------------------------
// ১৪. ইভেন্ট লিসেনার সেটআপ (Event Listeners Setup)
// --------------------------------------------------------------------------
function setupEventListeners() {
  // ট্রিং-ট্রিং বেল বাটন
  elements.bellBtn.addEventListener('click', () => {
    playTringTringBell();
    spawnFloatingNotes();
    
    if (!isPlaying) {
      playTrackAtIndex(currentTrackIndex);
    }
    
    const quoteIndex = Math.floor(Math.random() * bumperQuotes.length);
    elements.bumperQuote.textContent = bumperQuotes[quoteIndex];
  });

  // বাম্পার পরের উক্তি
  elements.nextQuoteBtn.addEventListener('click', () => {
    const quoteIndex = Math.floor(Math.random() * bumperQuotes.length);
    elements.bumperQuote.textContent = bumperQuotes[quoteIndex];
  });

  // প্লে ও পজ বোতাম
  elements.playPauseBtn.addEventListener('click', togglePlayPause);
  elements.nextBtn.addEventListener('click', nextTrack);
  elements.prevBtn.addEventListener('click', prevTrack);

  // ভলিউম স্লাইডার ও মিউট
  elements.volumeInput.addEventListener('input', handleVolumeChange);
  elements.muteToggleBtn.addEventListener('click', toggleMute);

  // সিকবার
  elements.seekInput.addEventListener('input', handleSeek);

  // প্লেলিস্ট স্লাইডার প্যানেল
  elements.playlistToggleBtn.addEventListener('click', () => {
    elements.playlistPanel.classList.toggle('is-open');
  });

  elements.closePlaylistBtn.addEventListener('click', () => {
    elements.playlistPanel.classList.remove('is-open');
  });

  elements.playlistSearch.addEventListener('input', (e) => {
    renderPlaylistUI(e.target.value);
  });
}

// --------------------------------------------------------------------------
// ১৫. অ্যাপ ইনিশিয়ালাইজেশন (Initialize Application)
// --------------------------------------------------------------------------
document.addEventListener('DOMContentLoaded', () => {
  renderPlaylistUI();
  setupEventListeners();
  initVisualizer();
  
  updateClock();
  setInterval(updateClock, 10000);
  
  updateListenersCount();
  setInterval(updateListenersCount, 15000);
});
