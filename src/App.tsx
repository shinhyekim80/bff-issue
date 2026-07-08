import { BrowserRouter, Navigate, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import AnswerTypeSelect from './screens/AnswerTypeSelect';
import WriteText from './screens/WriteText';
import WritePhoto from './screens/WritePhoto';
import WriteSticker from './screens/WriteSticker';
import Magazine from './pages/Magazine';
import SubmissionComplete from './screens/SubmissionComplete';
import FriendResponses from './screens/FriendResponses';
import WeeklyPreview from './screens/WeeklyPreview';
import MonthlyMagazine from './screens/MonthlyMagazine';
import GroupCreate from './screens/GroupCreate';
import InviteAccept from './screens/InviteAccept';
import Onboarding from './screens/Onboarding';
import KakaoShare from './screens/KakaoShare';
import FontPreview from './screens/FontPreview';
import BirthdayInvitation from './screens/BirthdayInvitation';

function HomeGate() {
  const onboarded = typeof window !== 'undefined' && localStorage.getItem('onboarded') === 'true';
  return onboarded ? <Home /> : <Navigate to="/onboarding" replace />;
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Full-screen pages (no bottom nav) */}
        <Route path="/answer" element={<AnswerTypeSelect />} />
        <Route path="/write/text" element={<WriteText />} />
        <Route path="/write/photo" element={<WritePhoto />} />
        <Route path="/write/sticker" element={<WriteSticker />} />
        <Route path="/complete" element={<SubmissionComplete />} />
        <Route path="/friends/today" element={<FriendResponses />} />
        <Route path="/weekly" element={<WeeklyPreview />} />
        <Route path="/magazine/:vol" element={<MonthlyMagazine />} />
        <Route path="/group/create" element={<GroupCreate />} />
        <Route path="/invite/:code" element={<InviteAccept />} />
        <Route path="/onboarding" element={<Onboarding />} />
        <Route path="/share/kakao" element={<KakaoShare />} />
        <Route path="/font-preview" element={<FontPreview />} />
        <Route path="/birthday-invite" element={<BirthdayInvitation />} />

        <Route path="/" element={<Layout />}>
          <Route index element={<HomeGate />} />
          <Route path="magazine" element={<Magazine />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
