import Hero from '../components/Hero';
import GitHubProjects from '../components/GitHubProjects';
import ProfileSummary from '../components/ProfileSummary';

const Home = () => {
    return (
        <div>
            <Hero />
            <ProfileSummary />
            <GitHubProjects />
            {/* <ProjectGrid />  - Optional: Keep or remove static grid */}
        </div>
    );
};

export default Home;
