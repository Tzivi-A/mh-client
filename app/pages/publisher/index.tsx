import { Button } from '~/components/button/button'
import { Card } from '~/components/card/card'
import { Image } from '~/components/image/image'
import logo from '~/assets/images/LogoMevaker.png'

export const PublisherPage = () => {
  return (
    <div>
      <Card>
        Publisher
        <Button onClick={() => window.alert('Hello! I am the Mevaker!')} type="submit">
          Click the Mevaker
        </Button>
        <Image src={logo} alt="mevaker" />
      </Card>
    </div>
  )
}
