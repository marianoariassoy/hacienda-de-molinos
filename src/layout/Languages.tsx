import { languages } from '../data/data'
import { useDataContext } from '../context/useDataContext'

const Languages = () => {
  const { lan, setLan } = useDataContext()

  const changeLanguage = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    const lanSelected = e.currentTarget.textContent
    setLan(lanSelected)
  }

  return (
    <nav>
      <ul className='flex gap-x-1 [&>li>a:hover]:underline [&>li>a]:decoration-2 [&>li>a]:underline-offset-4 [&>li:last-child]:hidden text-sm'>
        {languages.map(({ title }: { title: string }, index) => (
          <>
            <li key={index}>
              <a
                href='#'
                className={`${title === lan ? 'underline' : ''}`}
                onClick={changeLanguage}
              >
                {title}
              </a>
            </li>
            <li>/</li>
          </>
        ))}
      </ul>
    </nav>
  )
}

export default Languages
