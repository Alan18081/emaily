export default state => {
  const activeDraft = state.drafts.activeDraft;
  if(!activeDraft) return {};
  const {title = '',from = '',subject = '',body = ''} = activeDraft;
  const recipients = state.drafts.activeDraft.recipients
    .map(recipient => recipient.email).join(', ');
  return {
    title,
    from,
    subject,
    body,
    recipients
  }
};