/*global
    $, React,
*/
// edited this using vim :-)
var realEstateListing = [
    "Purchase & sale of land",
    "Leases (of land and buildings, for residential, commercial, agricultural or other uses)",
    "Sub-division and amalgamation of land",
    "Change of user of land",
    "Caveats and cautions",
    "Easements",
    "Extension of government leases",
    "Property Joint ventures",
    "Real estate developments"
];

var companyAndCorperateLawListing = [
    "Incorporation and registration of local and foreign companies and business names",
    "Company compliance including preparing and filing board of directors’ and shareholders’ resolutions; attending to changes to Memoranda & Articles of Association.",
    "Shareholders Agreements",
    "Share Purchase Agreements",
    "Incorporation of Trusts",
    "Incorporation of Public benefits Organisations"
];

var bankingFinanceAndSecuritiesListing = [
    "real estate finance",
    "secured and unsecured lending",
    "asset finance",
    "project finance"
];

var commercialLawListing = [
    "Preparation of all manner of commercial and corporate agreements",
    "General advice to local and international clients on commercial law",
    "Supply and distribution Agreements",
    "Franchising & Licensing Agreements",
    "Contracts for provision of services",
    "Non-disclosure Agreements",
    "Joint venture Agreements",
    "Loan & Financing Agreements",
    "Sponsorship Agreements",
    "Consultancy Agreements"
];

var intellectualPropertyLawListing = [
    "Registrations, assignments and renewal of trademarks in Kenya",
    "Co-ordinating registrations, assignments and renewal of trademarks ",
    "Registered User Agreements for Trademarks",
    "licensing and franchise agreements",
    "assignment of intellectual property agreements",
    "Registration of industrial designs",
    "Advising on copyright"
];

var estatePlanningAndSuccessionListing = [
    "advising on the laws of succession and estate planning",
    "drafting wills and trusts ",
    "dealing with estate administrations"
];

var civilLitigationListing = [
    "real estate litigation",
    "commercial & contract disputes",
    "recoveries and debt-collection",
    "general negligence",
    "judicial review",
    "mortgage realisations",
    "employment and labour related disputes",
    "fraud"
];

var Homepage = React.createClass({
    paragraph1: 'FKA is a Kenyan progressive Kenyan corporate and commercial law firm providing legal advice \
                and transaction services to a wide range of both Kenyan and international clients. At FKA we strive to develop \
                and provide our clients with solutions tailor made to protect and safeguard their interests, whilst minimizing \
                the legal and regulatory risks. We are a modern Firm that is aware of our clients\' specifc legal needs and our \
                aim to address and fulfill them adequately.',
    render: function () {
        return (
            <PageSection title="Homepage">
                <p>{this.paragraph1}</p>
                <p>
                    Our areas of practice include real estate & conveyancing, corporate & commercial law, and banking finance 
                    & securities. The Firm also provides Notary and Commissioner for Oaths services.
                </p>
                <p>
                    The range of clients at FKA includes property development companies, local businesses & companies, construction
                    & infrastructure companies, banks & financial services institutions, manufacturing and services companies, transport and
                    as well as private individuals
                .</p>
                <p>
                    FKA is led by the Managing Partner Ms. Faith Kanaga who is assisted by a vibrant and dedicated Team of Associates,
                    paralegal and support staff.
                </p>
            </PageSection>
        );
    }
});

var AboutUs = React.createClass({
    paragraph1: "",
    render: function () {
        return (
            <PageSection title="About US">
                <p>
                    FKA is a Kenyan progressive Kenyan corporate and commercial law firm providing legal advice and transaction services 
                    to a wide range of both Kenyan and international clients. At FKA we strive to develop and provide our clients with 
                    solutions tailor made to protect and safeguard their interests, whilst minimising the legal and regulatory risks. 
                    We are a modern Firm that is aware of our clients’ specific legal needs and our aim to address and fulfill them adequately.
                </p>
                <p>
                    Our areas of practice include real estate & conveyancing, corporate & commercial law, and banking finance & securities. 
                    The Firm also provides Notary and Commissioner for Oaths services
                </p>
                <p>
                    The range of clients at FKA includes property development companies, local businesses & companies, construction & infrastructure 
                    companies, banks & financial services institutions, manufacturing and services companies, transport and as well as private individuals.
                </p>
                <p>
                    FKA is led by the Managing Partner Ms. Faith Kanaga who is assisted by a vibrant and dedicated Team of Associates, paralegal 
                    and support staff.
                </p>
            </PageSection>
        );
    }
});

var OurPolicy = React.createClass({
    render: function () {
        var ourPolicyListing = [
            "Developing and providing solutions that protect and enhance our clients’ interests.",
            "We continuously improve ourselves to ensure that our services keep up with the industry best practice.",
            "Maintaining efficiency by utilizing technology to add value to our clients and ensuring that you the client are kept updated on progress of your matter.",
            "Upholding legal professional standards while maintaining the highest levels of integrity in carrying out our duties and serving our clients. ",
            "Ensuring that the work environment facilitates friendliness, team work, mutual respect and enthusiasm for work "
        ];
        return (
            <PageSection title="Our Policy">
                <p>
                    At FKA our aim is to ensure that the legal advice and services we provide to our clients is not only accurate and 
                    relevant but is also delivered in a friendly and client-oriented manner.  We are fully aware of the need for legal 
                    advice and legal structures to be compatible with the needs of modern commerce, industry and finance.
                </p>
                <p>We pride ourselves in adhering to the following basic principles: </p>
                <Listing data={ourPolicyListing}/>
            </PageSection>
        );
    }
});

var PracticalAreas = React.createClass({
    render: function () {
        return (
            <PageSection title="Practical Areas">
                <h3>Real Estate & Conveyancing</h3>
                <p>
                    FKA has a wealth of experience in all aspects of land law and property transactions in Kenya. We act for 
                    real estate industry players by advising on the full range of real estate related transactions from negotiating, 
                    documenting and completing all aspects of property transactions be it a simple purchase of property to structuring 
                    a complex development project. The range of services in this area covers the following aspects:
                </p>
                <Listing data={realEstateListing}/>

                <h3>Company & Corporate Law</h3>
                <p>
                    FKA is well versed in the area of company and corporate law. We have advised numerous corporate clients on 
                    various aspects of this subject. Areas in which we offer advice and representation include:
                </p>
                <Listing data={companyAndCorperateLawListing}/>
                

                <h3>Banking Finance & Securities</h3>
                <p>
                    Our Firm has extensive experience in in advising financial and lending institutions on a number of issues 
                    relating to banking securities. We appreciate that banks need to ensure that their lending is secure through 
                    proper security documentation.
                </p>
                <p>
                    We advise on review of securities, drafting bank security documents such as debentures, mortgages, charges, 
                    Chattels Mortgages and registration of the same with the relevant lands authorities.  Our experience includes 
                    the following areas:
                </p>
                <Listing data={bankingFinanceAndSecuritiesListing}/>

                <h3>Commercial Law</h3>
                <p>
                    FKA provides legal advice to customers on a broad range of commercial contracts across all business and 
                    industry sectors. We develop and draft contracts that capture the client’s intent as well as comply with 
                    the applicable law. The areas covered under this docket include, but are not limited to
                </p>
                <Listing data={commercialLawListing}/>

                <h3>Intellectual Property law</h3>
                <p>
                    At FKA, we appreciate the rights that clients obtain in their products, services and brands and therefore 
                    provide them with the relevant legal advice on how to register and protect those rights. We cover the 
                    following areas in this field:
                </p>
                <Listing data={intellectualPropertyLawListing}/>
                

                <h3>Estate Planning & Succession</h3>
                <p>
                    We provide clients with practical advice on appropriate structures to manage administration of their 
                    Estate and ensuring that their affairs are in order.
                </p>
                <p>Our services include:</p>
                <Listing data={estatePlanningAndSuccessionListing}/>
                    

                <h3>Immigration</h3>
                <p>
                    Many corporations are expanding their geographical reach and opening up local offices in the country. 
                    As a result, we have several expatriates working in the country.
                </p>
                <p>
                    We advise on various Immigration aspects for our multinational clients including residence applications, 
                    visas, special passes, dependants’ passes, work/entry permits, citizenship status among others.
                </p>

            </PageSection>
        );
    }
});

var CSR = React.createClass({
    render: function () {
        return (
            <PageSection title="Corporate Social Responsibility">
                <p>
                    At FKA we appreciate that there is a need to uplift the less privileged members of our Society to 
                    live a life a dignity through provision of basic needs such as health, education among others.
                </p>
                <p>
                    It is for this reason that we have taken part in and contributed towards such worthy causes through 
                    the League of Young Professionals Foundation and the First Lady’s Beyond Zero Campaign, among others.
                </p>
            </PageSection>
        );
    }
});

var CivilLitigation = React.createClass({
    render: function () {
        return (
             <PageSection title="Civil Litigation">
                <p>
                    The Firm has experience in prosecution and defending of civil and commercial dispute in various courts in 
                    the country representing a wide range of clients. We work closely with our clients to develop strategies 
                    that will produce the most efficient results. We strive to guide our clients through litigation and alternative 
                    dispute resolution and in that regard offer legal advice an
                </p>
                <Listing data={civilLitigationListing}/>
             </PageSection>
        )
    }
})

var Listing = React.createClass({
    render: function () {
        return (
            <ul>
                {this.props.data.map(function(list_content, i){
                    return <li>{list_content}</li>;
                })}
            </ul>
        );
    }
});

var PageSection = React.createClass({
    render: function () {
        return (
            <section id="body-section">
                <div className="container">
                    <h1>{this.props.title}</h1>
                    <div>{this.props.children}</div>
                </div>
            </section>
        );
    }
});

var PageLink = React.createClass({
    openLink: function(link) {
        $('.nav.navbar-nav li').removeClass("active");
        link.target.parentNode.setAttribute("class", "active");
        var fragment = link.target.dataset.page
        React.render(
            <Page section={sectionsMap[fragment]} fragment={fragment}/>,
            document.getElementById('content')
        );
    },
    render: function () {
        return(
            <li >
                <a href={this.props.url} data-page={this.props.page} className="nav-links" onClick={this.openLink}>
                    {this.props.title}
                </a>
            </li>
        );
    }
});

var Navigation = React.createClass({
    render: function () {
        return (
            <div id="header-section">
                <h1 className="text-center">FAITH KANAGA & ASSOCIATES ADVOCATES</h1>
                <nav className="navbar navbar-fixed">
                  <div className="container-fluid">
                    <div className="navbar-header">
                      <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
                        <span className="sr-only">Toggle navigation</span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                      </button>
                      {/*<a className="navbar-brand" href="#">Brand</a>*/}
                    </div>

                    <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                      <ul className="nav navbar-nav">
                        <PageLink url="/#!" title="Home" page="home"/>
                        <PageLink url="/#!our-policy" title="Our Policy" page="our-policy"/>
                        <PageLink url="/#!about-us" title="About Us" page="about-us"/>
                        <PageLink url="/#!practical-areas" title="Practical Areas" page="practical-areas"/>
                        <PageLink url="/#!csr" title="CSR" page="csr"/>
                        <PageLink url="/#!civil-litigation" title="Civil Litigation" page="civil-litigation"/>
                      </ul>
                    </div>
                  </div>
                </nav>
                <hr/>
            </div>
        )
    }
})

var Page = React.createClass({
    render: function () {
        return (
            <section >
                <Navigation />
                {this.props.section}
            </section>
        );
    }
});

var sectionsMap = {
    "csr": <CSR/>,
    "about-us": <AboutUs/>,
    "our-policy": <OurPolicy/>,
    "home": <Homepage/>,
    "practical-areas": <PracticalAreas/>,
    "civil-litigation": <CivilLitigation/>
};

// get the active section and assign it to a variable
var urlSections = document.URL.split('#!');
var fragment = "home";
if (urlSections.length > 1 && urlSections[1] !== '') {
    fragment = urlSections[1];
};

$(window).load(function(){
    // set the active link on load
    var activeLink = document.querySelector(".nav.navbar-nav li a[data-page='" + fragment + "']")
    activeLink.parentNode.setAttribute("class", "active");
});

React.render(
    <Page section={sectionsMap[fragment]} fragment={fragment}/>,
    document.getElementById('content')
);
