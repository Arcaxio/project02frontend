import Header from './components/Header';
import Body from './components/Body';
import Footer from './components/Footer';
import { ThemeProvider } from './components/theme-provider';

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div className="min-h-screen flex flex-col bg-background text-foreground">
        <Header />
        <main className="grow">
          <Body />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  )
}

export default App
