
function addReferral(referralLink, email) {
  const referralsRef = admin.firestore().collection('Referrals')

  // Add a new document with programName and subdomain
  referralsRef
    .add({
      referralLink: referralLink,
      email: email,
    })
    .then((docRef) => {
      console.log('Document written with ID:', docRef.id)
      res.status(200).json({
        success: true,
        message: 'Referral stored successfully',
      })
    })
    .catch((error) => {
      console.error('Error adding referral:', error)
      res.status(500).json({ error: 'Internal server error' })
    })
}
