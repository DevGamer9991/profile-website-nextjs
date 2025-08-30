# Parker Thornton — Personal Profile Website

This is my personal profile and portfolio site, built with [Next.js](https://nextjs.org/), [Chakra UI](https://chakra-ui.com/), and [Saas UI](https://saas-ui.dev/). It's a dynamic landing page that highlights my experience, skills, and hobbies as a backend developer and systems architect.

**Live Site:** [parkerthornton.net](https://parkerthornton.net/)  
**Source:** [github.com/DevGamer9991/profile-website-nextjs](https://github.com/DevGamer9991/profile-website-nextjs)

---

## 👋 About Me

Hey there! I’m Parker Thornton. I build high performance infrastructure, design APIs, and run game servers for thousands of users. I love working at the intersection of backend code and networking.

My site showcases:
- My technical expertise (from API design to server orchestration)
- Real-world hosting experience (Docker, Proxmox, Linux)
- Hobbies like car photography, racing, and CTF challenges

---

## 🧰 Tech Stack

- **Next.js** (App Router, TypeScript)
- **Chakra UI & Saas UI** for components and styling
- **Framer Motion, GSAP** for animation
- **Instagram API** for live photo feed

---

## ✨ Features

- Animated hero and highlights section
- Dynamic feature blocks and skills
- Integration with Instagram for my automotive photography
- Pricing table and FAQ (great for freelance/service profiles)
- Responsive and dark mode ready
- Fully customizable from the `/data` folder

---

## 🚦 Getting Started

Clone and install dependencies:

```bash
git clone https://github.com/DevGamer9991/profile-website-nextjs.git
cd profile-website-nextjs
pnpm install
```

Run locally:

```bash
pnpm dev
```

Visit [http://localhost:3000](http://localhost:3000)

---

## 📝 Customization

- **Basic Info:** Edit `/data/config.ts` for your name, logo, and links.
- **Sections:** Update `/app/(marketing)/page.tsx` for hero, highlights, and features.
- **Pricing & FAQ:** Edit `/data/pricing.ts` and `/data/faq.ts`.
- **Instagram:** Set `INSTAGRAM_USER_ID` and `INSTAGRAM_ACCESS_TOKEN` in `.env`.

---

## 📦 Folder Structure

```
app/                # Next.js app directory
components/         # UI and layout components
data/               # Site configuration, pricing, FAQ, hobbies
public/             # Images, favicons, assets
```

---

## ⚡ Deployment

Ready to deploy on [Vercel](https://vercel.com/) out of the box!

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/import/project?template=https://github.com/DevGamer9991/profile-website-nextjs)

---

## 📚 Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [Chakra UI Docs](https://chakra-ui.com/docs)
- [Saas UI Docs](https://saas-ui.dev/docs)

---

## 🏁 Credits

- [Saas UI](https://saas-ui.dev) for the base template and inspiration
- [Chakra UI](https://chakra-ui.com) for the component library
- [GSAP](https://gsap.com) & [Framer Motion](https://www.framer.com/motion/) for animation

---

## 📄 License

MIT © 2025 [Parker Thornton](https://github.com/DevGamer9991)
