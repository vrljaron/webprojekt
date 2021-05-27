export interface Evidence {
  id: string;
  title: string;
  shortTitle?: string;
  version?: string;
  visited?: boolean;
}

/*
{
  url : <uri>, // Canonical identifier for this evidence, represented as a URI (globally unique)
  version : <string>, // Business version of the evidence
  name : <string>, // C? Name for this evidence (computer friendly)
  title : <string>, // Name for this evidence (human friendly)
  shortTitle : <string>, // Title for use in informal contexts
  subtitle : <string>, // Subordinate title of the Evidence
  status : <code>, // R!  draft | active | retired | unknown
  date : <dateTime>, // Date last changed
  publisher : <string>, // Name of the publisher (organization or individual)
  contact : [{ ContactDetail }], // Contact details for the publisher
  description : <markdown>, // Natural language description of the evidence
  note : [{ Annotation }], // Used for footnotes or explanatory notes
  useContext : [{ UsageContext }], // The context that the content is intended to support
  jurisdiction : [{ CodeableConcept }], // Intended jurisdiction for evidence (if applicable)
  copyright : <markdown>, // Use and/or publishing restrictions
  approvalDate : <date>, // When the evidence was approved by publisher
  lastReviewDate : <date>, // When the evidence was last reviewed
  effectivePeriod : { Period }, // When the evidence is expected to be used
  topic : [{ CodeableConcept }], // The category of the Evidence, such as Education, Treatment, Assessment, etc.
  author : [{ ContactDetail }], // Who authored the content
  editor : [{ ContactDetail }], // Who edited the content
  reviewer : [{ ContactDetail }], // Who reviewed the content
  endorser : [{ ContactDetail }], // Who endorsed the content
  relatedArtifact : [{ RelatedArtifact }], // Additional documentation, citations, etc.
  exposureBackground : { Reference(EvidenceVariable) }, // R!  What population?
  exposureVariant : [{ Reference(EvidenceVariable) }], // What exposure?
  outcome : [{ Reference(EvidenceVariable) }] // What outcome?
}*/
