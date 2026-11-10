// kit.js - what the tests share.
//   const { ok, same, done } = checks("name")   ok(pass, what) · same(what, got, want) compares as JSON · done() prints and exits (1 on a failure)
export function checks(name) {
  const fails = [];
  let count = 0;
  return {
    ok(pass, what) { count++; if (!pass) fails.push(what); },
    same(what, got, want) { count++; if (JSON.stringify(got) !== JSON.stringify(want)) fails.push(`${what}: got ${JSON.stringify(got)}, want ${JSON.stringify(want)}`); },
    done() {
      if (!count) fails.push("no checks ran");
      console.log(fails.length ? `FAIL - ${name}:\n  ${fails.join("\n  ")}` : `ok - ${name} (${count} checks)`);
      process.exit(fails.length ? 1 : 0);
    },
  };
}
