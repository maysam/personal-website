import Link from 'next/link'
import GithubBadge from 'react-github-badge'

import { Head, CtaButton, Title, HeroImage, Frame } from '../components'

export default function YoutubeDarkmode () {
  return (
    <div className='container'>
      <Head />

      <GithubBadge
        url='https://github.com/hanford/youtube-darkmode'
        title='Star on Github'
      />

      <div className='hero'>
        <div className='content'>
          <Title>Youtube Darkmode</Title>
          <p style={{marginTop: '0.5rem', marginBottom: '3rem'}}>
            Google is redesigning youtube and also adding darkmode, this enables it right now
          </p>

          <HeroImage src='../static/darkmode.jpg' />

          <CtaButton link='https://chrome.google.com/webstore/detail/ajngaombckgmodafdnmipfmcfgppnnhp'>Add to Google chrome</CtaButton>

          <h2 style={{marginTop: '8rem'}}>How to video</h2>
          <p style={{maxWidth: '60rem', margin: '0 auto'}}>After installing the chrome extension, simply go to youtube and click "ok", and you'll load up the new youtube interface, from there you can enable darkmode or just enjoy the new white interface.</p>

          <Frame src='https://www.youtube.com/embed/plz6bGOb3VI' />
        </div>
      </div>

      <style jsx>{`
        .container {
          display: flex;
          max-width: 100%;
          justify-content: center;
          text-align: center;
          -webkit-overflow-scrolling: touch;
          overflow: auto;
        }

        .hero {
          max-width: 100%;
          width: 100%;
          background-color: white;
          color: rgba(0, 0, 0, 0.8);
          margin: 6rem 0;
          min-height: 60rem;
          padding: 2rem;
        }

        .content {
          display: flex;
          flex-direction: column;
        }
      `}</style>
    </div>
  )
}
