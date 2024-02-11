import CardAddNew from 'components/CardAddNew'
import { Tabs, TabsContent, TabsList, TabsTrigger } from 'components/Tabs'

function App() {
  return (
    <main className="flex size-full justify-center pt-[clamp(1rem,20vh,100px)]">
      <Tabs defaultValue="add-phrase" className="w-[min(40rem,90vw)]">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="add-phrase">Add new phrase</TabsTrigger>
          <TabsTrigger value="add-word">Add new word</TabsTrigger>
          <TabsTrigger value="search">Search</TabsTrigger>
        </TabsList>
        <TabsContent value="add-phrase">
          <CardAddNew />
        </TabsContent>
        <TabsContent value="add-word" />
        <TabsContent value="search" />
      </Tabs>
    </main>
  )
}

export default App
