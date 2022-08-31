import { Box, Typography, Grid, styled } from '@mui/material'

import { GridBgContainer } from '../components'
import { palette } from '../themes/AtriumTheme'

const Section = styled(Box)(({ theme }) => ({
  '& > div': {
    paddingTop: 40,
  },
  color: theme.palette.text.primary,
  marginBottom: 80,
}))
export const Policy = () => {
  return (
    <Box mt={16}>
      <Box
        sx={{
          '& .grid-bg': {
            '&::before': {
              left: `0%`,
              width: `100%`,
            },
            position: 'relative',
          },
          // minHeight: '1000px',
        }}
      >
        <GridBgContainer>
          <Grid
            container
            justifyContent="center"
            columns={{ lg: 10, xl: 12, xs: 12 }}
          >
            <Grid item sm={6} xs={12}>
              <Box p={13}>
                <Typography variant="h1" color={palette.text.primary}>
                  Privacy Policy
                </Typography>
              </Box>
              <Section>
                <Typography variant="h6">
                  ONLINE PRIVACY POLICY AGREEMENT
                </Typography>
                <Box>
                  <Typography variant="subtitle1">
                    Atrium (“AT”) values its users' privacy. This Privacy Policy
                    (“Policy”) will help you understand how we collect and use
                    personal information from those who visit our website or
                    make use of our online facilities and services, and what we
                    will and will not do with the information we collect. Our
                    Policy has been designed and created to ensure those
                    affiliated with AT of our commitment and realization of our
                    obligation not only to meet, but to exceed, most existing
                    privacy standards.
                    <br />
                    <br /> When you provide AT with your information, we work
                    hard to protect your information. This Privacy Policy is
                    meant to help you understand what information we collect,
                    why we collect it and how you may be able to update, manage
                    and/or request that we delete your information. Please read
                    this Privacy Policy carefully. By continuing to interact
                    with our sites, you acknowledge that you have read and
                    understand the terms described in this Privacy Policy.
                    <br />
                    <br /> We reserve the right to amend this Policy at any
                    given time. If you want to make sure that you are up to date
                    with the latest changes, we advise you to frequently visit
                    this page. If at any point in time AT decides to make use of
                    any personally identifiable information on file in a manner
                    vastly different from that which was stated when this
                    information was initially collected, the user or users shall
                    be promptly notified by email. Users at that time shall have
                    the option as to whether to permit the use of their
                    information in this separate manner.
                    <br />
                    <br /> This Policy applies to AT, and it governs any and all
                    data collection and usage by us. Through the use of and
                    visit to playatrum.com, you hereby consent to the data
                    collection procedures expressed in this Policy.
                    <br />
                    <br /> Please note that this Policy does not govern the
                    collection and use of information by companies that AT does
                    not control, nor by individuals not employed or managed by
                    us. If you visit a website that we mention or link to, be
                    sure to review its privacy policy before providing the site
                    with information. It is highly recommended and suggested
                    that you review the privacy policies and statements of any
                    website you choose to use or frequent to better understand
                    the way in which websites garner, make use of and share the
                    information collected.
                    <br />
                    <br /> Specifically, this Policy will inform you of the
                    following:
                    <br /> 1. What personally identifiable information is
                    collected from you through our website;
                    <br /> 2. Why we collect personally identifiable information
                    and the legal basis for such collection;
                    <br /> 3. How we use the collected information and with whom
                    it may be shared; <br />
                    4. What choices are available to you regarding the use of
                    your data; and 5. The security procedures in place to
                    protect against the misuse of your information.
                  </Typography>
                </Box>
              </Section>
              <Section>
                <Typography variant="h6">Information We Collect </Typography>
                <Box>
                  <Typography variant="subtitle1">
                    It is always up to you whether to disclose personally
                    identifiable information to us, although if you elect not to
                    do so, we reserve the right not to register you as a user or
                    provide you with any products or services. This website
                    collects various types of information, such as:
                    <br />
                    <br />
                    &nbsp;&bull;&nbsp; Voluntarily provided information which
                    may include your name, address, email address, billing
                    and/or credit card information etc., which may be used when
                    you purchase products and/or services and to deliver the
                    services you have requested.
                    <br />
                    &nbsp;&bull;&nbsp; Information automatically collected when
                    visiting our website, which may include cookies, third party
                    tracking technologies, and server logs.
                    <br />
                    <br />
                    In addition, AT may have the occasion to collect
                    non-personal anonymous demographic information, such as age,
                    gender, household income, political affiliation, race, and
                    religion, as well as the type of browser you are using, IP
                    address, or type of operating system, which will assist us
                    in providing and maintaining superior quality service.
                    <br />
                    <br />
                    AT may also deem it necessary, from time to time, to follow
                    websites that our users may frequent to glean what types of
                    services and products may be the most popular to customers
                    or the general public.
                    <br />
                    Please rest assured that this site will only collect
                    personal information that you knowingly and willingly
                    provide to us by way of surveys, completed membership forms,
                    and emails. It is the intent of this site to use personal
                    information only for the purpose for which it was requested,
                    and any additional uses specifically provided for on this
                    Policy.
                  </Typography>
                </Box>
              </Section>
              <Section>
                <Typography variant="h6">
                  Why We Collect Information and For How Long
                </Typography>
                <Box>
                  <Typography variant="subtitle1">
                    We are collecting your data for several reasons:
                    <br />
                    &nbsp;&bull;&nbsp; To better understand your needs and
                    provide you with the services you have requested;
                    <br />
                    &nbsp;&bull;&nbsp; To fulfill our legitimate interest in
                    improving our services and products;
                    <br />
                    &nbsp;&bull;&nbsp; To send you promotional emails containing
                    information we think you may like when we have your consent
                    to do so;
                    <br />
                    &nbsp;&bull;&nbsp; To contact you to fill out surveys or
                    participate in other types of market research, when we have
                    your consent to do so;
                    <br />
                    &nbsp;&bull;&nbsp; To customize our website according to
                    your online behavior and personal preferences.
                    <br />
                    <br />
                    The data we collect from you will be stored for no longer
                    than necessary. The length of time we retain said
                    information will be determined based upon the following
                    criteria: the length of time your personal information
                    remains relevant; the length of time it is reasonable to
                    keep records to demonstrate that we have fulfilled our
                    duties and obligations; any limitation periods within which
                    claims might be made; any retention periods prescribed by
                    law or recommended by regulators, professional bodies or
                    associations; the type of contract we have with you, the
                    existence of your consent, and our legitimate interest in
                    keeping such information as stated in this Policy.
                    <br />
                    <br />
                    In addition, we may disclose information about you to third
                    parties under the following circumstances:
                    <br />
                    &nbsp;&bull;&nbsp; If we are required to do so by law or
                    legal process;
                    <br />
                    &nbsp;&bull;&nbsp; To law enforcement authorities or other
                    government officials;
                    <br />
                    &nbsp;&bull;&nbsp; When we believe disclosure is necessary
                    or appropriate to prevent physical harm or financial loss,
                    or in connection with an investigation of suspected or
                    actual illegal and/or unethical activity;
                    <br />
                    &nbsp;&bull;&nbsp; If necessary to protect the vital
                    interests of a person;
                    <br />
                    &nbsp;&bull;&nbsp; To enforce our Terms of Use;
                    <br />
                    &nbsp;&bull;&nbsp; To protect our property, services, and
                    legal rights;
                    <br />
                    &nbsp;&bull;&nbsp; To prevent fraud against AT, our
                    affiliates, business partners, or authorized dealers;
                    <br />
                    &nbsp;&bull;&nbsp; To support auditing, compliance, and
                    corporate governance functions;
                    <br />
                    &nbsp;&bull;&nbsp; To comply with any and all applicable
                    laws; or
                    <br />
                    &nbsp;&bull;&nbsp; In connection with a corporate merger,
                    consolidation, or restructuring, the sale of substantially
                    all of our stock and/or assets, or other corporate change,
                    including, without limitation, during the course of any due
                    diligence process.
                  </Typography>
                </Box>
              </Section>
              <Section>
                <Typography variant="h6">
                  Use of Information Collected
                </Typography>
                <Box>
                  <Typography variant="subtitle1">
                    AT does not now, nor will it in the future, sell, rent, or
                    lease any of its customer lists and/or names to any third
                    parties.
                    <br />
                    <br />
                    AT may collect and may make use of personal information to
                    assist in the operation of our website and to ensure
                    delivery of the services you need and request. At times, we
                    may find it necessary to use personally identifiable
                    information as a means to keep you informed of other
                    possible products and/or services that may be available to
                    you from playatrium.com.
                    <br />
                    <br /> AT may also be in contact with you to complete
                    surveys and/or research questionnaires related to your
                    opinion of current or potential future services that may be
                    offered.
                    <br />
                    <br />
                    AT may find it beneficial to all our customers to share
                    specific data with our trusted partners to conduct
                    statistical analysis, provide you with email and/or postal
                    mail, deliver support and/or arrange for deliveries to be
                    made. Those third parties shall be strictly prohibited from
                    making use of your personal information, other than to
                    deliver those services which you requested, and as such they
                    are required, in accordance with this agreement, to maintain
                    the strictest of confidentiality with regards to all your
                    information.
                    <br />
                    <br /> AT uses various third-party social media features
                    including but not limited to Instagram and other interactive
                    programs. These may collect your IP address and require
                    cookies to work properly. These services are governed by the
                    privacy policies of the providers and are not within AT’s
                    control. By using this functionality, you give AT permission
                    to access all the elements of your social network profile
                    information that you have made available to be shared and to
                    use it in accordance with the social network’s terms of use
                    and this Privacy Policy. Please refer to the privacy
                    settings in your social network account for information
                    about what data is shared with us and other connected
                    applications and to manage the data that is shared through
                    your account, including information about your activities
                    using our sites.
                    <br />
                    <br />
                    If you would like to disconnect a social media account from
                    AT, refer to the settings of that social media account and
                    its provider.
                  </Typography>
                </Box>
              </Section>
              <Section>
                <Typography variant="h6">Disclosure of Information</Typography>
                <Box>
                  <Typography variant="subtitle1">
                    AT may not use or disclose the information provided by you
                    except under the following circumstances:
                    <br />
                    <br />
                    as necessary to provide services or products you have
                    ordered;
                    <br />
                    &nbsp;&bull;&nbsp;in other ways described in this Policy or
                    to which you have otherwise consented;
                    <br />
                    &nbsp;&bull;&nbsp;in the aggregate with other information in
                    such a way so that your identity cannot reasonably be
                    determined;
                    <br />
                    &nbsp;&bull;&nbsp;as required by law, or in response to a
                    subpoena or search warrant;
                    <br />
                    &nbsp;&bull;&nbsp;to outside auditors who have agreed to
                    keep the information confidential;
                    <br />
                    &nbsp;&bull;&nbsp;as necessary to enforce the Terms of
                    Service; and/or
                    <br />
                    &nbsp;&bull;&nbsp;as necessary to maintain, safeguard and
                    preserve all the rights and property of AT.
                  </Typography>
                </Box>
              </Section>
              <Section>
                <Typography variant="h6">Non-Marketing Purposes</Typography>
                <Box>
                  <Typography variant="subtitle1">
                    AT greatly respects your privacy. We do maintain and reserve
                    the right to contact you if needed for non-marketing
                    purposes (such as bug alerts, security breaches, account
                    issues, and/or changes in AT products and services). In
                    certain circumstances, we may use our website, newspapers,
                    or other public means to post a notice.{' '}
                  </Typography>
                </Box>
              </Section>
              <Section>
                <Typography variant="h6">
                  Children under the age of 13
                </Typography>
                <Box>
                  <Typography variant="subtitle1">
                    AT’s website is not directed to, and does not knowingly
                    collect personal identifiable information from, children
                    under the age of thirteen (13). If it is determined that
                    such information has been inadvertently collected on anyone
                    under the age of thirteen (13), we shall immediately take
                    the necessary steps to ensure that such information is
                    deleted from our system's database, or in the alternative,
                    that verifiable parental consent is obtained for the use and
                    storage of such information. Anyone under the age of
                    thirteen (13) must seek and obtain parent or guardian
                    permission to use this website.{' '}
                  </Typography>
                </Box>
              </Section>
              <Section>
                <Typography variant="h6">Links to Other Websites</Typography>
                <Box>
                  <Typography variant="subtitle1">
                    Our website does contain links to affiliate and other
                    websites. AT does not claim nor accept responsibility for
                    any privacy policies, practices and/or procedures of other
                    such websites. Therefore, we encourage all users and
                    visitors to be aware when they leave our website and to read
                    the privacy statements of every website that collects
                    personally identifiable information. This Privacy Policy
                    Agreement applies only and solely to the information
                    collected by our website.
                  </Typography>
                </Box>
              </Section>
              <Section>
                <Typography variant="h6">
                  Notice to European Union Users
                </Typography>
                <Box>
                  <Typography variant="subtitle1">
                    AT’s operations are located primarily in the United States.
                    If you provide information to us, the information will be
                    transferred out of the European Union (EU) and sent to the
                    United States. (The adequacy decision on the EU-US Privacy
                    became operational on August 1, 2016. This framework
                    protects the fundamental rights of anyone in the EU whose
                    personal data is transferred to the United States for
                    commercial purposes. It allows the free transfer of data to
                    companies that are certified in the US under the Privacy
                    Shield.) By providing personal information to us, you are
                    consenting to its storage and use as described in this
                    Policy.{' '}
                  </Typography>
                </Box>
              </Section>
              <Section>
                <Typography variant="h6">Security</Typography>
                <Box>
                  <Typography variant="subtitle1">
                    AT takes precautions to protect your information. When you
                    submit sensitive information via the website, your
                    information is protected both online and offline. Wherever
                    we collect sensitive information (e.g., credit card
                    information), that information is encrypted and transmitted
                    to us in a secure way. You can verify this by looking for a
                    lock icon in the address bar and looking for "https" at the
                    beginning of the address of the webpage.
                    <br />
                    <br />
                    We protect sensitive information transmitted online and we
                    also protect your information offline. Only employees who
                    need the information to perform a specific job (for example,
                    billing or customer service) are granted access to
                    personally identifiable information. The computers and
                    servers in which we store personally identifiable
                    information are kept in a secure environment. This is all
                    done to prevent any loss, misuse, unauthorized access,
                    disclosure, or modification of the user's personal
                    information under our control.
                    <br />
                    <br />
                    To that end, we maintain administrative, technical, and
                    physical safeguards to protect against loss, misuse, or
                    unauthorized access, disclosure, alteration, or destruction
                    of the information you provide when visiting or using the
                    site. However, no information system or program can be fully
                    secure, so we cannot guarantee the absolute security of your
                    personal information. Moreover, we are not responsible for
                    the security of information you transmit to the sites over
                    networks that we do not control, including the Internet and
                    wireless networks, and you hereby understand and acknowledge
                    the same.
                  </Typography>
                </Box>
              </Section>
              <Section>
                <Typography variant="h6">Acceptance of Terms</Typography>
                <Box>
                  <Typography variant="subtitle1">
                    By using this website, you are hereby accepting the terms
                    and conditions stipulated within the Privacy Policy
                    Agreement. If you are not in agreement with our terms and
                    conditions, then you should refrain from further use of our
                    site. In addition, your continued use of our website
                    following the posting of any updates or changes to our terms
                    and conditions shall mean that you agree and acceptance of
                    such changes.{' '}
                  </Typography>
                </Box>
              </Section>
              <Section>
                <Typography variant="h6">How to Contact Us</Typography>
                <Box>
                  <Typography variant="subtitle1">
                    If you have any questions or concerns regarding the Privacy
                    Policy Agreement related to our website, please feel free to
                    contact us at the following email or telephone number.
                    <br />
                    <br />
                    Email: ryan@limitededition.studio or
                    hunter@limitededition.studio
                    <br />
                    <br />
                    Telephone Number: (303) 817 – 1691 or (480) 640 – 1172
                  </Typography>
                </Box>
              </Section>
            </Grid>
          </Grid>
        </GridBgContainer>
      </Box>
    </Box>
  )
}
