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
  "টিপু সুলতানের সুপার স্পেশাল আইসক্রিম — ঠান্ডা খান, মন শান্ত করুন!",
  "আইসক্রিম ঠান্ডা, পরান ঠান্ডা! আস্তে চলেন, সেরা বাংলা গান শোনেন।",
  "১০ টাকার ললি, সুরের ভেলায় চলি! পাপী মন, ঠান্ডা আইসক্রিম খা।",
  "বাপের পথ ধরো, সাবধানে গাড়ি চালাও আর আইসক্রিম খাও!",
  "প্রেমের চেয়ে টিপু সুলতানের কুলফি ভালো, পরান জুড়ায়।",
  "সুর আর ঠান্ডা আইসক্রিম একসাথে — নস্টালজিয়া বাংলা গান।"
];

// ৪. প্লেলিস্টের গানসমূহ (Tracks in Playlist)
const userPlaylistTracks = [
  {
    id: "K1cQ7Y7_1gY",
    index: 0,
    title: "সেই তুমি (Sei Tumi)",
    artist: "এলআরবি (LRB / আইয়ুব বাচ্চু)",
    flavor: "মালাই কুলফি",
    cover: "https://img.youtube.com/vi/K1cQ7Y7_1gY/hqdefault.jpg"
  },
  {
    id: "nK9Xn_jGZpU",
    index: 1,
    title: "ফিরিয়ে দাও (Firie Dao)",
    artist: "মাইলস (Miles)",
    flavor: "অরেঞ্জ ললি",
    cover: "https://img.youtube.com/vi/nK9Xn_jGZpU/hqdefault.jpg"
  },
  {
    id: "bX7C-X4Z98U",
    index: 2,
    title: "তারায় তারায় রটিয়ে দেব (Taray Taray)",
    artist: "নগর বাউল জেমস (Nagar Baul James)",
    flavor: "চকলেট বার",
    cover: "https://img.youtube.com/vi/bX7C-X4Z98U/hqdefault.jpg"
  },
  {
    id: "u9R3P2g_nJ0",
    index: 3,
    title: "অনিকেত প্রান্তর (Oniket Prantor)",
    artist: "আর্টসেল (Artcell)",
    flavor: "শেল অ্যান্ড টিউব",
    cover: "https://img.youtube.com/vi/u9R3P2g_nJ0/hqdefault.jpg"
  },
  {
    id: "c8H6P4Y7eG0",
    index: 4,
    title: "সে যে বসে আছে (She Je Bose Ache)",
    artist: "অর্ণব (Arnob)",
    flavor: "কাপ আইসক্রিম",
    cover: "https://img.youtube.com/vi/c8H6P4Y7eG0/hqdefault.jpg"
  },
  {
    id: "k8a8e3Gz4kM",
    index: 5,
    title: "আমাকে আমার মতো থাকতে দাও",
    artist: "অনুপম রায় (Anupam Roy)",
    flavor: "ম্যাঙ্গো বার",
    cover: "https://img.youtube.com/vi/k8a8e3Gz4kM/hqdefault.jpg"
  },
  {
    id: "x7b2E_81n9Q",
    index: 6,
    title: "পৃথিবীটা নাকি ছোট হতে হতে",
    artist: "মহীনের ঘোড়াগুলি (Moheener Ghoraguli)",
    flavor: "স্পেশাল কুলফি",
    cover: "https://img.youtube.com/vi/x7b2E_81n9Q/hqdefault.jpg"
  },
  {
    id: "Y0vJ7F5Lg9k",
    index: 7,
    title: "বারান্দায় রোদ্দুর (Baranday Roddur)",
    artist: "ভূমি (Bhoomi)",
    flavor: "মালাই কুলফি",
    cover: "https://img.youtube.com/vi/Y0vJ7F5Lg9k/hqdefault.jpg"
  },
  {
    id: "x5v6F_72nM8",
    index: 8,
    title: "বন্দে মায়া লাগাইছে",
    artist: "শাহ আব্দুল করিম",
    flavor: "অরেঞ্জ ললি",
    cover: "https://img.youtube.com/vi/x5v6F_72nM8/hqdefault.jpg"
  },
  {
    id: "d8e7c_91gM0",
    index: 9,
    title: "নাসেক নাসেক (Nasek Nasek)",
    artist: "কোক স্টুডিও বাংলা",
    flavor: "চকলেট বার",
    cover: "https://img.youtube.com/vi/d8e7c_91gM0/hqdefault.jpg"
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
  
  ambientToggleBtn: document.getElementById('ambientToggleBtn'),
  visualizerCanvas: document.getElementById('visualizerCanvas')
};

// --------------------------------------------------------------------------
// ৬. Web Audio API — ট্রিং-ট্রিং ব্রাস বেল সাউন্ড (Brass Bell Synth)
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
  playBellChime(now);
  playBellChime(now + 0.12);
  playBellChime(now + 0.35);
  playBellChime(now + 0.47);
}

function playBellChime(startTime) {
  const freqs = [1800, 2400, 3200];
  freqs.forEach(freq => {
    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();

    osc.type = 'sine';
    osc.frequency.setValueAtTime(freq, startTime);

    gain.gain.setValueAtTime(0.3, startTime);
    gain.gain.exponentialRampToValueAtTime(0.001, startTime + 0.25);

    osc.connect(gain);
    gain.connect(audioCtx.destination);

    osc.start(startTime);
    osc.stop(startTime + 0.25);
  });
}

// --------------------------------------------------------------------------
// ৭. উড়ান্ত সুরের নোটিফিকেশন অ্যানিমেশন (Floating Musical Notes)
// --------------------------------------------------------------------------
function spawnFloatingNotes() {
  const symbols = ['♫', '♪', '♬', '♩', '🍦', '❄️', '⭐'];
  for (let i = 0; i < 5; i++) {
    setTimeout(() => {
      const note = document.createElement('div');
      note.className = 'floating-note';
      note.textContent = symbols[Math.floor(Math.random() * symbols.length)];
      note.style.left = (35 + Math.random() * 30) + '%';
      note.style.bottom = '180px';
      elements.notesLayer.appendChild(note);

      setTimeout(() => {
        note.remove();
      }, 2500);
    }, i * 150);
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
  updateTrackUI(currentTrackIndex);
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
    // গান পজ (Pause)
    ytPlayer.pauseVideo();
    isPlaying = false;
    updatePlayPauseUI();
  } else {
    // গান প্লে (Play)
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
  if (currentVolume === 0) {
    isMuted = true;
  } else {
    isMuted = false;
  }
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
  const base = 148 + Math.floor(Math.random() * 30);
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
