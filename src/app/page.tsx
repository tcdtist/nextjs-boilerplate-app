const featuresItems = [
  { icon: '🏎️', name: 'Next.js (app routing)' },
  { icon: '🔥', name: 'Type checking TypeScript' },
  { icon: '💅', name: 'Tailwind CSS' },
  { icon: '✨', name: 'ESlint' },
  { icon: '✨', name: 'Prettier' },
  { icon: '🧪', name: 'Jest' },
  { icon: '🧪', name: 'React Testing Library' },
  { icon: '📕', name: 'Storybook' },
  { icon: '💎', name: 'Atomic Design' },
  { icon: '🚀', name: 'GitHub Actions' },
  { icon: '💻', name: 'T3 Env' },
  { icon: '🏁', name: 'Absolute Imports using `@` prefix' },
]

const HomePage = () => (
  <div>
    <section className="bg-white px-4 dark:bg-gray-900">
      <div className="mx-auto grid max-w-screen-xl px-4 py-8 text-center lg:py-16">
        <div className="mx-auto place-self-center">
          <h1 className="mb-4 max-w-2xl text-4xl font-extrabold leading-none tracking-tight md:text-5xl xl:text-6xl dark:text-white">
            Next.js Enterprise Boilerplate
          </h1>
          <p className="mb-6 max-w-2xl font-light text-gray-500 md:text-lg lg:mb-8 lg:text-xl dark:text-gray-400">
            Boilerplate and Starter for Next.js, Tailwind CSS and TypeScript ⚡️ Made with developer
            experience first: Next.js, TypeScript, ESLint, Prettier, Husky, Lint-Staged, Jest, React
            Testing Library, PostCSS, Tailwind CSS, Storybook, Plop, GH actions.
          </p>
        </div>
      </div>
    </section>
    <div className="mx-auto mt-4 max-w-screen-lg px-4">
      <h2 className="text-bold mb-10 mt-8 text-3xl">🚀 Features:</h2>
      <ul className="grid grid-cols-1 grid-rows-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
        {featuresItems.map(({ icon, name }) => (
          <li
            key={name}
            className="flex flex-col items-center justify-center gap-2 rounded-lg border px-4 py-6 text-center shadow transition-all duration-300 hover:scale-105 hover:shadow-xl"
          >
            <span className="text-xl">{icon}</span>
            <span>{name}</span>
          </li>
        ))}
      </ul>
    </div>
  </div>
)

export default HomePage
