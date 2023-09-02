import Header from "./components/header";
import AllBikesPage from "./pages/allBikesPage";
import CreateBikePage from "./pages/createBikePage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import BikeDetailsPage from "./pages/bikeDetailsPage";
import SignInPage from "./pages/signInPage";
import AuthStatusProvider from "./context/userContext";
import Homepage from "./pages/homePage";
import Footer from "./footer";
import BrandBikePage from "./pages/brandBikesPage";
import SignUpPage from "./pages/signUpPage";
import ProfilePage from "./pages/profilePage";
import UpdateProfilePage from "./pages/updateProfile";
import CreatePost from "./pages/createPost";
import PostDetailsPage from "./pages/postDetails";
import { PrivateOutlet } from "./outlets/PrivateOutlet";
import AllPosts from "./pages/allPosts";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <AuthStatusProvider>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/signin" element={<SignInPage />}></Route>
          <Route path="/signup" element={<SignUpPage />}></Route>
          <Route path="/profile" element={<PrivateOutlet />}>
            <Route index element={<ProfilePage />} />
            <Route path="update" element={<UpdateProfilePage />}></Route>
          </Route>

          <Route path="/createPost" element={<PrivateOutlet />}>
            <Route index element={<CreatePost />}></Route>
          </Route>
          <Route path="/bikes" element={<AllBikesPage />} />
          <Route path="/posts" element={<AllPosts />} />
          <Route path="/addBike" element={<CreateBikePage />} />
          <Route path="/posts/:id" element={<PostDetailsPage />} />
          <Route path="/bikes/brands/:brand" element={<BrandBikePage />} />
          <Route path="/bikes/:id" exact element={<BikeDetailsPage />} />
        </Routes>
      </AuthStatusProvider>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
