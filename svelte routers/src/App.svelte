<script>
    import {Router,Route,Link} from 'svelte-navigator'
    import Home from "./Home.svelte";
    import About from "./About.svelte";
    import Users from "./Users.svelte";
    import Blog from "./Blog.svelte";
    import BlogCreate from "./BlogCreate.svelte";
</script>
<main>
    <Router>

        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/user/10">Users</Link>
        <Link to="/blog">Blog</Link>
        <Link to="/blog/create">Blog Create</Link>


        <Route path="/" component={Home} />
        <Route path="/about" >
            <About/>
        </Route>
        <Route path="/user/:id" component={Users} />

        <Route path="/blog/*" >
            <Route path="/" component={Blog} />
            <Route path="/create" component={BlogCreate} />



        </Route>


    </Router>
</main>

<style>
    :root {
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
        Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    }


</style>
