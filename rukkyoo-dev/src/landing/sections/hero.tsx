import { TypingText } from '@/components/lightswind/typing-text'
const hero = () => {
  return (
    <main className='relative flex min-h-screen w-full flex-col justify-between overflow-hidden bg-[#f3f4f6] px-6 py-8 text-left sm:px-10 sm:py-10 lg:px-20'>
      <div className='relative z-10 flex flex-1 flex-col justify-center gap-10 lg:grid lg:grid-cols-[minmax(0,1fr)_minmax(280px,420px)] lg:items-center lg:gap-20'>
        <div className='max-w-3xl'>
          <p className='mb-5 text-sm font-semibold uppercase tracking-[0.24em] text-gray-500'>
            Front-end developer
          </p>
          <div className='max-w-2xl'>
            <TypingText
              delay={0.5}
              duration={2}
              fontSize="text-6xl sm:text-7xl lg:text-7xl"
              fontWeight="font-extrabold"
              color="text-black"
              letterSpacing="tracking-tight"
              align="left"
            >
              Hello there!
            </TypingText>
          </div>
          <p className='mt-6 max-w-xl text-lg leading-relaxed text-gray-600 sm:text-xl'>
            Michael here. I craft beautiful, functional web experiences with a focus on thoughtful details and effortless interaction.
          </p>
        </div>

        <div className='relative mx-auto w-full max-w-md lg:mx-0 lg:justify-self-end'>
          <div className='hero-media-backplate absolute -inset-3 rounded-4xl bg-black/10' aria-hidden='true' />
          <div className='relative overflow-hidden rounded-3xl p-2 shadow-xl shadow-gray-300/50'>
            <video
              src='/star-wars-obi-wan.mp4'
              className='aspect-video w-full rounded-2xl object-cover'
              autoPlay
              loop
              muted
              playsInline
              aria-label="A looping clip of Obi-Wan Kenobi from Star Wars saying 'Hello there!'"
            />
          </div>
        </div>
      </div>
    </main>
  )
}

export default hero