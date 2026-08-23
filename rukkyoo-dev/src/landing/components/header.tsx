import { HamburgerMenuOverlay, type MenuItem } from '@/components/lightswind/hamburger-menu-overlay'

type HeaderProps = {
  activeSection: string
}

const navigationItems: MenuItem[] = [
  { label: 'Home', href: '#hero' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Articles', href: '#articles' },
  { label: 'Fun facts', href: '#fun-facts' },
  { label: 'Experience', href: '#experience' },
]


const sectionSurfaceTone: Record<string, 'light' | 'dark'> = {
  hero: 'light',
  skills: 'dark',
  projects: 'light',
  articles: 'dark',
  'fun-facts': 'light',
  experience: 'dark',
}

const header = ({ activeSection }: HeaderProps) => {
  const useLightForeground = sectionSurfaceTone[activeSection] === 'dark'
  const contrastClass = useLightForeground ? 'text-white' : 'text-gray-950'
  const mutedContrastClass = useLightForeground ? 'text-white/70' : 'text-gray-600'
  const activeNavClass = useLightForeground ? 'text-white' : 'text-gray-950'

  return (
    <>
      <header className={`pointer-events-none fixed inset-x-0 top-0 z-40 hidden px-6 py-5 md:block lg:px-12 ${contrastClass}`}>
        <nav className='pointer-events-auto mx-auto flex max-w-7xl items-center justify-between'>
          <a className='font-heading text-xl font-extrabold tracking-tight flex flex-row items-center' href='#hero'>
            <span>rukky</span><span className='text-blue-500'>oo</span> <img className='h-4 w-4' src='/art.png' alt='digital art' />
          </a>
          <div className='flex items-center gap-8'>
            <div className='hidden items-center gap-6 lg:flex'>
              {navigationItems.map((item) => (
                <a
                  key={item.label}
                  className={`text-sm font-semibold transition-colors hover:text-blue-500 ${item.href === `#${activeSection}` ? `${activeNavClass} underline decoration-blue-500 underline-offset-8` : mutedContrastClass}`}
                  href={item.href}
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        </nav>
      </header>

      <HamburgerMenuOverlay
        items={navigationItems}
        className='fixed inset-0 z-50 h-screen w-full md:hidden'
        buttonTop='34px'
        buttonLeft='calc(100% - 34px)'
        buttonSize='sm'
        buttonColor={useLightForeground ? 'black' : '#f3f4f6'}
        overlayBackground={useLightForeground ? '#111827' : '#f3f4f6'}
        textColor={useLightForeground ? '#ffffff' : '#111827'}
        fontFamily='"Pilcrow Rounded", sans-serif'
        fontSize='md'
        menuAlignment='center'
        enableBlur
        zIndex={50}
        ariaLabel='Open navigation menu'
      />
    </>
  )
}

export default header