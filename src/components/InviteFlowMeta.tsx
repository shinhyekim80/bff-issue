import NumberedStepList from './NumberedStepList';

export default function InviteFlowMeta() {
  return (
    <NumberedStepList
      steps={[
        { title: '친구가 링크를 누르면', description: '모임 참여 화면이 열려요' },
        { title: '한 자리만 채워지면', description: '모임이 시작돼요' },
        { title: '다른 친구도', description: '언제든 초대할 수 있어요' },
      ]}
    />
  );
}
