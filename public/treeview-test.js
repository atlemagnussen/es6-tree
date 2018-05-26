var patients = {
    categories: {
        label: "Categories",
        description: "This identifies the different classes of objects in the data model",
        children: {
            "class:patient": {
                label: "Patients",
                type: "class:category",
                description: "Recipients of medical care services.",
                children: {
                    "patient:janeDoe": {
                        label: "Jane Doe",
                        icon: "Woman.png",
                        type: "class:patient",
                        description: "35 year old writer of mystery novels",
                        postalCode: "98027",
                        children: {
                            "jd:plans": {
                                label: "Plans",
                                children: {
                                    "plan:JDHI1": {
                                        label: "Health Insurance JDHI1",
                                        type: "class:plan",
                                        icon: "Plan.png"
                                    },
                                    "plan:JDDI1": {
                                        label: "Dental Insurance JDDI1",
                                        type: "class:plan",
                                        icon: "Plan.png"
                                    },
                                    "plan:JDVI1": {
                                        label: "Vision Insurance JDVI1",
                                        type: "class:plan",
                                        icon: "Plan.png"
                                    }
                                }
                            }
                        }
                    },
                    "person:briannen": {
                        label: "Briannen Storm",
                        description: "24 year old female medical examiner",
                        icon: "Woman.png",
                        type: "class:patient",
                        postalCode: "98041",
                        children: {
                            "bs:plans": {
                                label: "Plans",
                                children: {
                                    "plan:BSHI1": {
                                        label: "Health Insurance BSHI1",
                                        type: "class:plan",
                                        icon: "Plan.png"
                                    },
                                    "plan:BSDI1": {
                                        label: "Dental Insurance BSDI1",
                                        type: "class:plan",
                                        icon: "Plan.png"
                                    },
                                    "plan:BSVI1": {
                                        label: "Vision Insurance BSVI1",
                                        type: "class:plan",
                                        icon: "Plan.png"
                                    }
                                }
                            }
                        }
                    },
                    "person:thomasKey": {
                        label: "Thomas Key",
                        description: "42 year old software architect",
                        icon: "Man.png",
                        type: "class:patient",
                        postalCode: "98043",
                        children: {
                            "group:KTplans": {
                                label: "Plans",
                                children: {
                                    "plan:TKHI1": {
                                        label: "Health Insurance HI2",
                                        type: "class:plan",
                                        icon: "Plan.png"
                                    },
                                    "plan:TKDI1": {
                                        label: "Dental Insurance DI2",
                                        type: "class:plan",
                                        icon: "Plan.png"
                                    },
                                    "plan:TKVI1": {
                                        label: "Vision Insurance VI2",
                                        type: "class:plan",
                                        icon: "Plan.png"
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
};
var physicians = {
    "class:physician": {
        label: "Physicians",
        type: "class:category",
        description: "Individual providers of medical care services",
        children: {
            "physician:drstrange": {
                label: "Dr. Stephen Strange",
                description: "Master of the Arcane",
                icon: "Doctor_Strange.jpg",
                type: "class:physician",
                children: {
                    "class:specialty": {
                        label: "Specialties",
                        children: {
                            "drdee:generalCare": {
                                label: "General Practitioner",
                                icon: "Doctor_Male.png",
                                description: "Provides general intake and consultative services, primary care physician."
                            },
                            "drdee:pediatrics": {
                                label: "Pediatrics",
                                icon: "Pediatrics.png",
                                description: "Provides care primarily for infants and children."
                            }
                        }
                    }
                }
            },
            "physician:drjones": {
                label: "Dr. Indiana Jones",
                description: "Archeologist Extraordinaire",
                type: "class:physician",
                icon: "Doctor_Male.png",
                children: {
                    "class:specialty": {
                        label: "Specialties",
                        children: {
                            "drjones:venomologist": {
                                label: "Venomologist",
                                icon: "Snake.png",
                                description: "Specializes in the effects and symptons of bites from snakes, spiders and other venomous animals"
                            }
                        }
                    }
                }
            },
            "physician:drWho": {
                label: "Doctor Who",
                type: "class:physician",
                icon: "Doctor_Who.jpg",
                description: "Mad man in a blue box. ",
                children: {
                    "class:specialty": {
                        label: "Specialties",
                        children: {
                            "drjones:chronicologist": {
                                label: "Chronicologist",
                                icon: "Tardis.png",
                                description: "Specializes in time travel-related diseases"
                            }
                        }
                    }
                }
            }
        }
    }
};

var treeview = new Treeview(".treeview","http://www.example.com/path/to/images/")
treeview.replaceData(patients);
setTimeout(()=>treeview.appendData(physicians,"categories"),3000);
