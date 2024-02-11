import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from 'components/Card'
import Label from 'components/Label'
import Input from 'components/Input'
import Button from 'components/Button'

function CardAddNew() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>New phrase</CardTitle>
        <CardDescription>Add new phrase to your vocabulary</CardDescription>
      </CardHeader>

      <CardContent className="space-y-2">
        <div className="space-y-1">
          <Label htmlFor="name">Phrase</Label>
          <Input id="add-new-phrase" />
        </div>
      </CardContent>

      {/* TODO: Word picker. */}

      <CardFooter>
        <Button variant="outline">Save changes</Button>
      </CardFooter>
    </Card>
  )
}

export default CardAddNew
