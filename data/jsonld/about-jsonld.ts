export const aboutJSONLD = () => {
    return (
        {
            "@context": "https://schema.org/",
            "@type": "Person",
            "name": "Sherif Wakil",
            "url": "https://oshot.uk/",
            "image": "https://oshot.uk/media/photos/about.png",
            "sameAs": [
                "https://www.facebook.com/pages/category/Plastic-Surgeon/Dr-SW-RSA-Clinics-313153212748233/",
                "https://twitter.com/drswclinics"
            ],
            "jobTitle": "Doctor",
            "worksFor": {
                "@type": "Organization",
                "name": "Dr. SW Clinic"
            }
        }
    )
}