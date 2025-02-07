'use client'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { SelectLeagues } from '@/components/SelectLeagues'
import { useState } from 'react'
import SelectSeasons from '@/components/SelectSeasons'
import SelectFixtures from '@/components/SelectFixtures'
import SelectOdds from '@/components/SelectOdds'
import SelectBookmakers from '@/components/SelectBookmakers'

export default function Home() {
  const [isLeague, setIsLeague] = useState<boolean>(true); 
  const [isSeason, setIsSeason] = useState<boolean>(false);
  const [isFixture, setIsFixture] = useState<boolean>(false); 
  const [isBookmaker, setIsBookmaker] = useState<boolean>(false);
  const [isOdd, setIsOdd] = useState<boolean>(false);
  const [leagueVal, setLeagueVal] = useState<number>();
  const [seasonVal, setSeasonVal] = useState<number>();
  const [fixtureVal, setFixtureVal] = useState<number>();
  const [bookMakerVal, setBookmakerVal] = useState<number>();
  const [oddVal, setOddVal] = useState<number>();

  return (
    <main className='flex min-h-screen flex-col items-center justify-between py-24'>
      <div className='flex w-full min-h-screen flex-col items-center justify-between'>
        <Card className='w-1/2 h-full' >
          <CardHeader>
            <CardTitle> {!isOdd && 'Select'} {isOdd && 'Odd'} {isLeague && 'League'} {isSeason && 'Season'} {isFixture && 'Fixture'} {isBookmaker && 'Book Makers'}</CardTitle>
          </CardHeader>
          <CardContent>
            {
              isLeague &&
              <SelectLeagues
                setIsLeague={setIsLeague}
                leagueVal={leagueVal}
                setLeagueVal={setLeagueVal}
                setIsSeason={setIsSeason} />
            }
            {
              isSeason &&
              <SelectSeasons
                setIsSeason={setIsSeason}
                setIsFixture={setIsFixture}
                seasonVal={seasonVal}
                setSeasonVal={setSeasonVal}
                setIsLeague={setIsLeague} />
            }
            {
              isFixture &&
              <SelectFixtures
                fixtureVal={fixtureVal}
                setFixtureVal={setFixtureVal}
                setIsFixture={setIsFixture}
                leagueVal={leagueVal}
                seasonVal={seasonVal}
                setIsBookmaker={setIsBookmaker}
                setIsSeason={setIsSeason}
              />
            }
            {
              isBookmaker &&
              <SelectBookmakers
                setIsBookmaker={setIsBookmaker}
                setBookmakerVal={setBookmakerVal}
                bookmakerVal={bookMakerVal}
                setIsOdd={setIsOdd}
                setIsFixture={setIsFixture}
              />
            }
            {
              isOdd &&
              <SelectOdds
                setIsOdd={setIsOdd}
                setOddVal={setOddVal}
                oddVal={oddVal}
                leagueVal={leagueVal}
                fixtureVal={fixtureVal}
                seasonVal={seasonVal}
                bookmakerVal={bookMakerVal}
                setIsBookmaker={setIsBookmaker}
              />
            }
          </CardContent>
          <CardFooter>
          </CardFooter>
        </Card>
      </div>
    </main>
  )
}
