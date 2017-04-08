import React, { Component } from 'react'
import Link from 'next/link'
import Router from 'next/router'
import GitHub from 'github-api'
import sortOn from 'sort-on'

import Modal from '../../components/modal'
import Head from '../../components/head'
import config from '../../config.json'
import Card from './card'

const USER_NAME = 'hanford'

const gh = new GitHub({ token: config.token })

const me = gh.getUser(USER_NAME)

export default class Projects extends Component {
  static async getInitialProps () {
    const { data } = await me.listRepos()

    let myRepos = data.filter(({ owner, fork }) => owner.login === USER_NAME && !fork)
    let repos = sortOn(myRepos, '-stargazers_count')

    return {
      repos
    }
  }

  showRepo (e, id) {
    e.preventDefault()

    Router.push({
      pathname: '/projects',
      query: {
        projectId: id
      }
    })
  }

  onKeyDown (e) {
    if (!this.props.url.query.projectId) return
    if (e.keyCode === 27) {
      this.props.url.back()
    }
  }

  dismissModal () {
    Router.push('/projects')
  }

  render () {
    const { url, repos } = this.props

    return (
      <div style={{height: '100%', width: '100%', overflow: 'scroll'}}>
        <Head title='Jack Hanford | Projects' />

        <div className='container'>
          <div className='card'>
            <Link href='/'>
              <a style={{position: 'absolute', top: '1rem', right: '1rem'}}>Back</a>
            </Link>

            <div className='projects'>
              <div>Projects</div>
              <div>I started writing JavaScript professionally 5 years ago.</div>
            </div>

            {
              url.query.projectId &&
                <Modal
                  id={url.query.projectId}
                  onDismiss={() => this.dismissModal()}
                />
            }

            <div className='list'>
              {
                repos.map(({ name, id, description, stargazers_count: stars, language }) => (
                  <Card
                    name={name}
                    id={id}
                    description={description}
                    stars={stars}
                    language={language}
                    showRepo={this.showRepo}
                  />
                ))
              }
            </div>
          </div>
        </div>

        <style jsx>{`
          .container {
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            max-width: 100%;
            width: 110rem;
            margin: 3rem auto;
          }

          .projects {

          }

          .list {
            display: flex;
            justify-content: center;
            text-align: center;
            flex-wrap: wrap;
          }

          .card {
            box-shadow: 0 18px 35px rgba(50,50,93,.1), 0 8px 15px rgba(0,0,0,.07);
            background-color: #f6f9fc;
            color: #32325d;
            border-radius: 0.4rem;
            padding: 2rem 4rem;
            position: relative;
            margin-top: 2rem;
          }
        `}</style>
      </div>
    )
  }
}
