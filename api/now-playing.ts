import type { VercelRequest, VercelResponse } from "@vercel/node";

export default async function handler(req: VercelRequest, res: VercelResponse) {
  // Simulate media metadata for profile aesthetic (e.g. Quran/Quranic audio stream)
  const trackTitle = "Zadify Live Audio";
  const artistName = "QS. Ar-Rahman • Murottal Mishari";
  const isPlaying = true;

  // Animated CSS for spinning disc and pulsing equalizers
  const svg = `
<svg width="480" height="180" viewBox="0 0 480 180" fill="none" xmlns="http://www.w3.org/2000/svg">
  <style>
    @keyframes spin {
      from { transform: rotate(0deg); }
      to { transform: rotate(360deg); }
    }
    @keyframes eq1 { 0%, 100% { height: 12px; } 50% { height: 44px; } }
    @keyframes eq2 { 0%, 100% { height: 32px; } 50% { height: 8px; } }
    @keyframes eq3 { 0%, 100% { height: 20px; } 50% { height: 56px; } }
    @keyframes eq4 { 0%, 100% { height: 40px; } 50% { height: 15px; } }
    @keyframes eq5 { 0%, 100% { height: 16px; } 50% { height: 48px; } }

    .disc {
      transform-origin: center;
      transform-box: fill-box;
      animation: spin 8s linear infinite;
    }
    .eq-bar1 { animation: eq1 1.2s ease-in-out infinite; }
    .eq-bar2 { animation: eq2 1.5s ease-in-out infinite; }
    .eq-bar3 { animation: eq3 0.9s ease-in-out infinite; }
    .eq-bar4 { animation: eq4 1.3s ease-in-out infinite; }
    .eq-bar5 { animation: eq5 1.1s ease-in-out infinite; }
  </style>

  <!-- Glassmorphism Card background -->
  <rect width="480" height="180" rx="16" fill="#0d1117" stroke="rgba(255,255,255,0.08)" stroke-width="1.5" />
  <rect width="480" height="180" rx="16" fill="url(#radial-glow)" opacity="0.15" />

  <!-- Glow definition -->
  <defs>
    <radialGradient id="radial-glow" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="#00ffff" />
      <stop offset="100%" stop-color="#0d1117" />
    </radialGradient>
  </defs>

  <!-- Left side: Spinning vinyl record style -->
  <g transform="translate(25, 25)">
    <rect width="130" height="130" rx="12" fill="#161b22" stroke="rgba(255,255,255,0.04)" />
    <!-- Outer vinyl disk -->
    <g transform="translate(65, 65)">
      <circle r="50" fill="#010409" stroke="rgba(255,255,255,0.1)" stroke-width="2" />
      <circle r="20" fill="rgba(255,255,255,0.05)" stroke="rgba(255,255,255,0.15)" />
      <g class="disc">
        <circle r="50" fill="none" stroke="#00ffff" stroke-width="1" opacity="0.2" stroke-dasharray="10 5" />
        <circle r="40" fill="none" stroke="rgba(255,255,255,0.12)" stroke-width="1" />
        <circle r="30" fill="none" stroke="rgba(255,255,255,0.08)" stroke-width="1" />
        <circle r="12" fill="#0d1117" stroke="#00ffff" stroke-width="1" />
      </g>
    </g>
  </g>

  <!-- Right side: Track Details & Visualizer -->
  <g transform="translate(175, 35)">
    <!-- Song Details -->
    <text x="0" y="18" fill="#c6eaee" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="11" font-weight="700" letter-spacing="1.5">⚡ NOW LISTENING</text>
    <text x="0" y="52" fill="#ffffff" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="15" font-weight="800">${trackTitle}</text>
    <text x="0" y="76" fill="#8b949e" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="12" font-weight="500">${artistName}</text>

    <!-- Dynamic Playing Status Equalizer bars -->
    <g transform="translate(0, 105)">
      <rect x="0" y="28" width="8" height="12" rx="2" fill="#00ffff" class="eq-bar1" />
      <rect x="15" y="8" width="8" height="32" rx="2" fill="#0082fc" class="eq-bar2" />
      <rect x="30" y="20" width="8" height="20" rx="2" fill="#00ffff" class="eq-bar3" />
      <rect x="45" y="0" width="8" height="40" rx="2" fill="#0082fc" class="eq-bar4" />
      <rect x="60" y="24" width="8" height="16" rx="2" fill="#00ffff" class="eq-bar5" />
    </g>

    <!-- Stats labels -->
    <text x="160" y="145" fill="#30363d" font-family="monospace" font-size="10" font-weight="800">DSP</text>
    <rect x="190" y="135" width="65" height="18" rx="9" fill="rgba(0,255,255,0.06)" stroke="rgba(0,255,255,0.15)" stroke-width="0.5" />
    <text x="222" y="148" text-anchor="middle" fill="#00ffff" font-family="monospace" font-size="10" font-weight="700">REALTIME</text>
  </g>
</svg>
  `.trim();

  res.setHeader("Content-Type", "image/svg+xml");
  res.setHeader("Cache-Control", "public, max-age=60, s-maxage=60, stale-while-revalidate=30");
  return res.status(200).send(svg);
}
