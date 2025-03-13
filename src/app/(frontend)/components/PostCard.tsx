import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '@/components/ui/card'
import { X, Heart } from 'lucide-react'

export default function PostCard() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex justify-between items-center">
          <h2>January 1, 2000</h2>
          <Heart />
        </CardTitle>
      </CardHeader>

      <CardContent>
        <p>Post content</p>
      </CardContent>

      <CardFooter>
        <a href="/post">Read more</a>
      </CardFooter>
    </Card>
  )
}
