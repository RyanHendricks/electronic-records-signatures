/*
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */



function DocumentESignature(DocumentESignature) {
    console.log('DocumentSigned');

    var currentParticipant = getCurrentParticipant(StudyStaffID);
    var signer = currentParticipant;


   

    //change document status
    document.status = signed;

    //PrivateVehicleTransaction for log
    var documentLogEntry = factory.newConcept('documentLogEntry');
    documentLogEntry.timestamp = privatedocument.timestamp;
    if (!document.logEntries) {
        vehicle.logEntries = [];
    }

    return getAssetRegistry(document.getFullyQualifiedType())
        .then(function(ar) {
            return ar.update(document);
        });
}