import CardAddNew from 'components/CardAddNew'
import { Tabs, TabsContent, TabsList, TabsTrigger } from 'components/Tabs'

function App() {
  return (
    <main className="flex size-full justify-center pt-[clamp(1rem,20vh,100px)]">
      <Tabs defaultValue="add-new" className="w-[min(40rem,90vw)]">
        <TabsList>
          <TabsTrigger value="add-new">Add new</TabsTrigger>
          <TabsTrigger value="search">Search</TabsTrigger>
        </TabsList>
        <TabsContent value="add-new">
          <CardAddNew />
        </TabsContent>
        <TabsContent value="search">Search</TabsContent>
      </Tabs>
    </main>
  )
}

export default App
