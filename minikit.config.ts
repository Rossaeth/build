const ROOT_URL =
  process.env.NEXT_PUBLIC_URL ||
  (process.env.VERCEL_PROJECT_PRODUCTION_URL ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}` : 'http://localhost:3000');

/**
 * MiniApp configuration object. Must follow the Farcaster MiniApp specification.
 *
 * @see {@link https://miniapps.farcaster.xyz/docs/guides/publishing}
 */
// Minikit Config
export const minikitConfig = {
  miniapp: {
    version: "1",
    name: "Cubey",
    iconUrl: "https://build-sigma-azure.vercel.app/icon.png",
    homeUrl: "https://build-sigma-azure.vercel.app",
    imageUrl: "https://build-sigma-azure.vercel.app/image.png",
    splashImageUrl: "https://build-sigma-azure.vercel.app/splash.png",
    splashBackgroundColor: "#677777",
    webhookUrl: "https://build-sigma-azure.vercel.app/api/webhook",
    subtitle: "rossa",
    description: "rossa",
    primaryCategory: "permainan",
    heroImageUrl: "https://images.unsplash.com/photo-1625137395544-32f0f687b408" //<img src={minikitConfig.miniapp.heroImageUrl} alt="Hero Image" />

  },
  accountAssociation: {
    header: "eyJmaWQiOjExMTIzMTksInR5cGUiOiJjdXN0b2R5Iiwia2V5IjoiMHg0MjBiMzgzZmFBN0ZGNTFFODNCYjUzZkJERTVkYUMzZjBkMWJhOUIyIn0",
    payload: "eyJkb21haW4iOiJidWlsZC1zaWdtYS1henVyZS52ZXJjZWwuYXBwIn0",
    signature: "EQabcLp4jA9A+7ZKL+XazfZMpZT5abgBbRQ7ewEk6EMI+rk0VS60ychOOS84PlMOLloDDvibBOgeXU13XAWU3hw="
  }
};

