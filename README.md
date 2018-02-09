# Single file testing doesn't work correctly after migration to Jest 22

Jest tries running test 2 times instead of 1:

- 1st run is successful
- 2nd run fails with unmatched snapshot error if such test scenario exists

```plaintext
$ jest client/sample.test.jsx
 PASS  client/sample.test.jsx
 FAIL  client/sample.test.jsx
  ● client/sample.jsx › should work

    expect(value).toMatchSnapshot()
    
    Received value does not match stored snapshot 1.
    
    - Snapshot
    + Received

```

Such test should be run only once.

Sample commands to reproduce the issue:

`yarn test client/sample.test.jsx`

`yarn test server/sample.test.jsx`

## Workarounds
There are workarounds:
- `$` symbol should be added to the end of the filename, then test is run only once
  `yarn test client/sample.test.jsx$`
- use --testPathPattern parameter with the test file name as a value:
  `yarn test --testPathPattern client/sample.test.jsx`
 
