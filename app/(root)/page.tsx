import HeaderBox from '@/components/HeaderBox'
import TotalBalanceBox from '@/components/TotalBalanceBox';
import React from 'react'

const Home = () => {

    const loggedIn = {firstName : 'Soham'};
  return (
    <section className='home'>
        <div className='home-content'>
            <header className='home-header'>
                <HeaderBox
                type="greeting"
                title="Welcome"
                user={loggedIn?.firstName || 'Guest'}
                subtext = "Access and manage your account and transaction"
                />

                <TotalBalanceBox
                accounts={[]}
                totalBanks={1}
                totalCurrentBalance={12}
                />

            </header>
        </div>

    </section>
  )
}

export default Home