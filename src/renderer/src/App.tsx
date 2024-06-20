import { Content, DraggableTopBar, RootLayout } from './components'

const App = () => {
  return (
    <>
      <DraggableTopBar />
      <RootLayout>
        <Content className="border-l bg-zinc-900/50 border-l-white/20">Content</Content>
      </RootLayout>
    </>
  )
}

export default App
