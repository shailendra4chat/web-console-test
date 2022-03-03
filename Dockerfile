FROM cypress/included:6.2.1

RUN mkdir -p /e2e
RUN mkdir -p /e2e/cypress/results
RUN mkdir -p /e2e/cypress/reports
RUN mkdir -p /e2e/public
RUN mkdir -p /appData

RUN chgrp -R 0 /e2e && \
    chmod -R g=u /e2e

RUN chgrp -R 0 /e2e/cypress/results && \
    chmod -R g=u /e2e/cypress/results
	
RUN chgrp -R 0 /e2e/cypress/reports && \
    chmod -R g=u /e2e/cypress/reports

RUN chgrp -R 0 /e2e/public && \
    chmod -R g=u /e2e/public
    
RUN chgrp -R 0 /appData && \
    chmod -R g=u /appData

WORKDIR /e2e
COPY . .

RUN npm install
USER 20
ENTRYPOINT [ "npm", "test" ]