# Clinical Trial Document Integrity Network - Module 11 - Electronic Records + Electronic Signatures 

**Submission to the TopCoder Hyperledger Hackathon**


This network is designed to track the electronic signatures on electronic records for a clinical trial in accordance with Title 21 CFR Part 11 of the Code of Federal Regulations.

Various participants in the network have differing levels of access and authority but no single participant group has complete authority. A regulator is able to view the transaction chain to obtain information such as:
> * The timeline and chain of events for the creation of a document, review, approval, certification, signature, modification, signature, trasmittal, archival, and destruction.
> * Participant creation (activation), modification, actions taken, authority modified, access level changes, and account removal (deactivated).


This business network is for the Management and Oversight of Clinical Trials. Currently, this is just a framework upon which more features and integrations can be built. There are numerous  ways a distributed ledger can be implemented into the Trial Management Procedures. From Regulatory Document version control, electronic signatures, investigational product accountability, Institutional Review Board approvals,subject enrollment logs, temperature reading for IP shipments, training certificates, etc. Excel is still heavily used in the industry due to its simplicity, familiarity, compatibility, and the overall frustration of research staff resulting from an uneccesarily large number of individual systems required for only one protocol.

Currently, this Clinical Research DLT Application is in the infancy stage and merely consists of a framework at this time. The goal of this version was to focus on illustrating the potential larger scale application of the framework by creating a comprehensive foundation that would permit such larger scale implementation. 


**Participants**    
`Regulator` - FDA, Auditors, Regulators  
`Sponsor` - The Clinical Trial Sponsor  
`TrialManagement` - The group or entity repsonsible for the management of the Clinical Trial; typically a CRO.  
`SiteManagement` - The person or group responsible for management of individual Clinical Trial sites. Usually a member of the `TrialManagement` organization but with oversight for only a subset of the study sites. A "CRA" would be an example of a member of this participant group.  
`SitePI` - The principal investigator for an individual study site. This name will be listed on the FDA 1572 for a clinical trial completed by the clinical trial site prior to initiation of a protocol. Sub-Investigators will be implemented in this group in later version.  
`SiteResearchStaff` - Research staff for a clinical trial site that are not considered to be investigators (PI or sub-Is). These participants will be listed in the Delegation of Authority Log prior to their inclusion in this network.   


**Assets**  
`Document`  
`Signature`  
`Authority` -- maybe  


**Transactions**  
`Create Participant`  
`Activate Participant`  
`Deactivate Particpant`  
`Assign Participant Permissions`  

`Create Document`  
`Modify Document`  
`Review Document`  
`Approve Document`  
`Certify Document`  
`Retrieve Document`  
`Transmit Document`  
`Archive Document`  

`Create Signature`  
`Certify Signature`  
`Approve Signature`  
`Revoke Signature`  
`Amend Signature`  
