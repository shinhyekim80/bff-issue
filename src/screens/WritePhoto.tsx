import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import OptionalCaption from '../components/OptionalCaption';
import PhotoPicker from '../components/PhotoPicker';
import SubmitPillButton from '../components/SubmitPillButton';
import WriteShell from '../components/WriteShell';

export default function WritePhoto() {
  const navigate = useNavigate();
  const [hasPhoto, setHasPhoto] = useState(false);
  const [caption, setCaption] = useState('');

  return (
    <WriteShell current="photo" minHeightClass="min-h-[760px]">
      <PhotoPicker onSelectedChange={setHasPhoto} />

      {hasPhoto && <OptionalCaption value={caption} onChange={setCaption} />}

      <div className="relative max-w-[340px] mx-auto z-[2]">
        <SubmitPillButton
          disabled={!hasPhoto}
          disabledLabel="사진을 선택해주세요"
          onClick={() => {
            if (hasPhoto) navigate('/complete');
          }}
        />
      </div>
    </WriteShell>
  );
}
