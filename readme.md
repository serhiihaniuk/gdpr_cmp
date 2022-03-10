## instalation

1. npm install
2. npm run dev

## advanteges

1. Same css for all pages. 1 source of truth. All current looks of cmp on all our pages can be configured on same css base using variables. There's no need to change css code directly.
2. Can be fully configured using only variables. Product advantage as no-code or low-code solution.
3. Easy to maintain. No need to check thousands of pages with different css when implement changes to core code.
4. Easy to make updates to popup becouse any css won't be broken. No need to test lots of pages when you want to implement something like 'fix scrolling behaviour bug'
5. The posibility to migrate from the old code base with intermediate results for the business.
6. The possibility to improve current accessibility and semantic.
7. The posibility to improve current performance.
8. Compitable architecture for future possible consent-modules upgrades. F.E. if new iab framework comes out we can simply create new module with no need to refactor whole application.
9. Type system and a more stable code base.
10. Common interface to connect modules to popup

## roadmap:

1. Create no ads info popup on new architecture
2. Implement 1st party cookies module after that app can be used in production solving business problems.
3. Then we have time and possibility to migrate from old forked cmp-popup creating new gdpr module.

result: we have new no ads cmp with 1st party cookies module and migrated from legasy forked cmp popup;
